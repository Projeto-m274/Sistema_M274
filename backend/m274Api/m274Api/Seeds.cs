using m274Api.Models;
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
    }
}
