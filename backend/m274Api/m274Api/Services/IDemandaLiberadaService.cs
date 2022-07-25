using m274Api.Dtos;
using m274Api.Models;
using m274Api.Services.Base;

namespace m274Api.Services
{
    public interface IDemandaLiberadaService : IApplicationService
    {
        Task<List<DemandaLiberadaListDto>> ListAll();
    }
}
