using Microsoft.AspNetCore.Identity;
using m274Api.Models;
using m274Api.Repositories.Base;
using System.Linq;
using m274Api.EntityFramework;
using m274Api.Repositories;

namespace QuebraGalho.Repositories
{
    public class UsuarioRepository : BaseRepository<Usuario>, IUsuarioRepository
    {
        private readonly RoleManager<Perfil> _roleManager;
        private readonly UserManager<Usuario> _usuarioManager;
        private readonly SignInManager<Usuario> _signInManager;

        public UsuarioRepository(DataContext context,
                                UserManager<Usuario> usuarioManager,
                                SignInManager<Usuario> signInManager,
                                RoleManager<Perfil> roleManager
            ) : base(context)
        {
            _usuarioManager = usuarioManager;
            _signInManager = signInManager;
            _roleManager = roleManager;
        }

        public async Task<IdentityResult> CreateAsync(Usuario usuario, string password, int perfilId)
        {
            IdentityResult result = await _usuarioManager.CreateAsync(usuario, password);
            if (!result.Succeeded)
                return result;

            //var resultRole = await _roleManager.CreateAsync(new Perfil { Name = "Normal" });
            var perfil = await _roleManager.FindByIdAsync(perfilId.ToString());
            result = await _usuarioManager.AddToRoleAsync(usuario, perfil.Name);

           
            return result;
        }

        public async Task<SignInResult> SignInAsync(string userName, string password)
        {
            var result = await _signInManager.PasswordSignInAsync(userName, password,
                   isPersistent: false, lockoutOnFailure: false);
            return result;
        }

        public async Task<SignInResult> SignInAsync(Usuario usuario, string password)
        {
            var result = await _signInManager.PasswordSignInAsync(usuario?.UserName, password,
                isPersistent: false, lockoutOnFailure: false);
            return result;
        }

        public Usuario GetByUserName(string userName)
        {
            return DbSet.SingleOrDefault(x => x.UserName == userName);
        }
    }
}
