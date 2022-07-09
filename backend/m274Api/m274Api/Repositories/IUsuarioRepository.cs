using Microsoft.AspNetCore.Identity;
using m274Api.Models;
using m274Api.Repositories.Base;

namespace m274Api.Repositories
{
    public interface IUsuarioRepository : IBaseRepository<Usuario>
    {
        Task<IdentityResult> CreateAsync(Usuario usuario, string password, int perfilId);

        Task<SignInResult> SignInAsync(string userName, string password);

        Task<SignInResult> SignInAsync(Usuario usuario, string password);

        Usuario GetByUserName(string userName);
    }
}
