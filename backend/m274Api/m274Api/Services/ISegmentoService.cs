using m274Api.Dtos;
using m274Api.Services.Base;

namespace m274Api.Services
{
    public interface ISegmentoService : IApplicationService
    {
        Task<List<SegmentoListDto>> ListAll();
    }
}
