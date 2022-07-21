using m274Api.Dtos;
using m274Api.Services.Base;

namespace m274Api.Services
{
    public interface IEstadoService : IApplicationService
    {
        Task<List<EstadoListDto>> ListAll();
    }
}
