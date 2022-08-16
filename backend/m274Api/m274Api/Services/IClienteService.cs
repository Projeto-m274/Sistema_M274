using m274Api.Dtos;
using m274Api.Services.Base;

namespace m274Api.Services
{
    public interface IClienteService : IApplicationService
    {
        Task<List<ClienteListDto>> ListAll();
    }
}
