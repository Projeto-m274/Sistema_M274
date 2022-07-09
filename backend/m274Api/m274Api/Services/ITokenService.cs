using m274Api.Models;
using m274Api.Services.Base;

namespace m274Api.Services
{
    public interface ITokenService : IApplicationService
    {
        Task<string> GenerateToken(Usuario usuario);
    }
}
