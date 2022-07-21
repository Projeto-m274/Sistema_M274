using m274Api.Models;
using m274Api.Repositories;
using Microsoft.AspNetCore.Identity;

namespace m274Api
{
    public static class Seeds
    {
        public static async Task CreateUserRoles(IServiceProvider serviceProvider)
        {
            var RoleManager = serviceProvider.GetRequiredService<RoleManager<Perfil>>();
            var UserManager = serviceProvider.GetRequiredService<UserManager<Usuario>>();

            IdentityResult roleResult;
            //Adding Admin Role
            var roleCheck = await RoleManager.RoleExistsAsync("Admin");
            if (!roleCheck)
            {
                //create the roles and seed them to the database
                roleResult = await RoleManager.CreateAsync(new Perfil { Name = "Admin" });

                if (!roleResult.Succeeded)
                    throw new Exception(roleResult.Errors.First().Description);
            }
            //Assign Admin role to the main User here we have given our newly registered 
            //login id for Admin management
            Usuario user = await UserManager.FindByEmailAsync("admin@admin.com");
            if (user == null)
            {
                user = new Usuario();
                user.UserName = "admin";
                user.Nome = "Admin";
                user.Email = "admin@admin.com";

                var result = await UserManager.CreateAsync(user, "123qwe");

                if (!result.Succeeded)
                    throw new Exception(result.Errors.First().Description);

                result = await UserManager.AddToRoleAsync(user, "Admin");

                if (!result.Succeeded)
                    throw new Exception(result.Errors.First().Description);
            }

        }

        public static async Task CreateRegiao(IServiceProvider serviceProvider)
        {
            var repositorioRegiao = serviceProvider.GetRequiredService<IRegiaoRepository>();

            if (!(await repositorioRegiao.ListAllAsync()).Any())
            {
                repositorioRegiao.Insert(new Regiao
                {
                    NomeRegiao = "Norte"
                });

                repositorioRegiao.Insert(new Regiao
                {
                    NomeRegiao = "Nordeste"
                });

                repositorioRegiao.Insert(new Regiao
                {
                    NomeRegiao = "Centro-Oeste"
                });

                repositorioRegiao.Insert(new Regiao
                {
                    NomeRegiao = "Sudeste"
                });

                repositorioRegiao.Insert(new Regiao
                {
                    NomeRegiao = "Sul"
                });

                await repositorioRegiao.SaveChangesAsync();
            }
        }

        public static async Task CreateEstados(IServiceProvider serviceProvider)
        {
            var repositorioEstado = serviceProvider.GetRequiredService<IEstadoRepository>();
            var repositorioRegiao = serviceProvider.GetRequiredService<IRegiaoRepository>();

            if (!(await repositorioEstado.ListAllAsync()).Any())
            {
                var regioes = (await repositorioRegiao.ListAllAsync()).ToList();

                var regiaNorte = regioes.Where(r => r.NomeRegiao == "Norte").Single();
                repositorioEstado.Insert(new Estado
                {
                   Nome = "Acre" ,
                   RegiaoId = regiaNorte.Id
                });

                repositorioEstado.Insert(new Estado
                {
                    Nome = "Roraima",
                    RegiaoId = regiaNorte.Id
                });

                repositorioEstado.Insert(new Estado
                {
                    Nome = "Amapá",
                    RegiaoId = regiaNorte.Id
                });

                repositorioEstado.Insert(new Estado
                {
                    Nome = "Pará",
                    RegiaoId = regiaNorte.Id
                });

                repositorioEstado.Insert(new Estado
                {
                    Nome = "Tocantins",
                    RegiaoId = regiaNorte.Id
                });

                repositorioEstado.Insert(new Estado
                {
                    Nome = "Rondônia",
                    RegiaoId = regiaNorte.Id
                });

                var regiaoNordeste = regioes.Where(r => r.NomeRegiao == "Nordeste").Single();

                repositorioEstado.Insert(new Estado
                {
                    Nome = "Maranhão",
                    RegiaoId = regiaoNordeste.Id
                });

                repositorioEstado.Insert(new Estado
                {
                    Nome = "Piauí",
                    RegiaoId = regiaoNordeste.Id
                });

                repositorioEstado.Insert(new Estado
                {
                    Nome = "Ceará",
                    RegiaoId = regiaoNordeste.Id
                });

                repositorioEstado.Insert(new Estado
                {
                    Nome = "Rio Grande do Norte",
                    RegiaoId = regiaoNordeste.Id
                });

                repositorioEstado.Insert(new Estado
                {
                    Nome = "Pernambuco",
                    RegiaoId = regiaoNordeste.Id
                });

                repositorioEstado.Insert(new Estado
                {
                    Nome = "Paraíba",
                    RegiaoId = regiaoNordeste.Id
                });

                repositorioEstado.Insert(new Estado
                {
                    Nome = "Sergipe",
                    RegiaoId = regiaoNordeste.Id
                });

                repositorioEstado.Insert(new Estado
                {
                    Nome = "Alagoas",
                    RegiaoId = regiaoNordeste.Id
                });

                repositorioEstado.Insert(new Estado
                {
                    Nome = "Bahia",
                    RegiaoId = regiaoNordeste.Id
                });

                var regiaoCentroOeste = regioes.Where(r => r.NomeRegiao == "Centro-Oeste").Single();

                repositorioEstado.Insert(new Estado
                {
                    Nome = "Mato Grosso",
                    RegiaoId = regiaoCentroOeste.Id
                });

                repositorioEstado.Insert(new Estado
                {
                    Nome = "Mato Grosso do Sul",
                    RegiaoId = regiaoCentroOeste.Id
                });

                repositorioEstado.Insert(new Estado
                {
                    Nome = "Goiás",
                    RegiaoId = regiaoCentroOeste.Id
                });

                var regiaoSudeste = regioes.Where(r => r.NomeRegiao == "Sudeste").Single();

                repositorioEstado.Insert(new Estado
                {
                    Nome = "São Paulo",
                    RegiaoId = regiaoSudeste.Id
                });

                repositorioEstado.Insert(new Estado
                {
                    Nome = "Espírito Santo",
                    RegiaoId = regiaoSudeste.Id
                });

                repositorioEstado.Insert(new Estado
                {
                    Nome = "Rio de Janeiro",
                    RegiaoId = regiaoSudeste.Id
                });

                repositorioEstado.Insert(new Estado
                {
                    Nome = "Minas Gerais",
                    RegiaoId = regiaoSudeste.Id
                });

                var regiaoSul = regioes.Where(r => r.NomeRegiao == "Sul").Single();

                repositorioEstado.Insert(new Estado
                {
                    Nome = "Paraná",
                    RegiaoId = regiaoSul.Id
                });

                repositorioEstado.Insert(new Estado
                {
                    Nome = "Rio Grande do Sul",
                    RegiaoId = regiaoSul.Id
                });

                repositorioEstado.Insert(new Estado
                {
                    Nome = "Santa Catarina",
                    RegiaoId = regiaoSul.Id
                });

                await repositorioEstado.SaveChangesAsync();
            }
        }
    }
}
