using m274Api;
using m274Api.AutoMapper.Profiles;
using m274Api.EntityFramework;
using m274Api.EntityFramework.Identity;
using m274Api.Extensions;
using m274Api.Models;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using System.Text;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddCors();

//Configurar bando de dados postgres
builder.Services.AddEntityFrameworkNpgsql()
    .AddDbContext<DataContext>(options =>
    options.UseNpgsql(builder.Configuration.GetConnectionString("Default")));

builder.Services.AddIdentity<Usuario, Perfil>(options =>
{
    options.User.RequireUniqueEmail = true;

    options.Password.RequiredLength = 6;
    options.Password.RequireUppercase = false;
    options.Password.RequireNonAlphanumeric = false;
    options.Lockout.MaxFailedAccessAttempts = 30;
})
    .AddErrorDescriber<PortugueseIdentityErrorDescriber>()
    .AddEntityFrameworkStores<DataContext>();

//Injeção dos services
builder.Services.AddApplicationServices();

//Injeção dos repositorios
builder.Services.AddRepositories();

builder.Services.AddAutoMapper(typeof(DefaultProfile));

//Configuração JWT
var settings = new Settings();
builder.Configuration.GetSection(nameof(Settings)).Bind(settings);
var key = Encoding.ASCII.GetBytes(settings.JWTKey);
builder.Services.AddAuthentication(x =>
{
    x.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    x.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
})
    .AddJwtBearer(x =>
    {
        x.RequireHttpsMetadata = false;
        x.SaveToken = true;
        x.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuerSigningKey = true,
            IssuerSigningKey = new SymmetricSecurityKey(key),
            ValidateIssuer = false,
            ValidateAudience = false
        };
    });

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();

//Config swagger and whith bearer token
builder.Services.AddSwaggerGen(s =>
{
    s.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
    {
        In = ParameterLocation.Header,
        Description = "Please insert JWT with Bearer into field",
        Name = "Authorization",
        Type = SecuritySchemeType.ApiKey
    });
    s.AddSecurityRequirement(new OpenApiSecurityRequirement {
       {
         new OpenApiSecurityScheme
         {
           Reference = new OpenApiReference
           {
             Type = ReferenceType.SecurityScheme,
             Id = "Bearer"
           }
          },
          new string[] { }
        }
  });
});

//Add Options
builder.Services.Configure<Settings>(builder.Configuration.GetSection(nameof(Settings)));

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors(x => x
                .AllowAnyOrigin()
                .AllowAnyMethod()
                .AllowAnyHeader());

app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

var scopeFactory = ((IApplicationBuilder)app).ApplicationServices.GetRequiredService<IServiceScopeFactory>();

var scope = scopeFactory.CreateScope();

//Rodando migração alteração do banco de dados
scope.ServiceProvider.GetService<DataContext>().Database.Migrate();

//Rodando sementes com dados necessario
Seeds.CreateUserRoles(scope.ServiceProvider).Wait();

app.Run();
