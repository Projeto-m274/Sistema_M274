using m274Api.Dtos;
using m274Api.Services.Base;

namespace m274Api.Services
{
    public interface ITipoImovelService : IApplicationService
    {
        Task<List<TipoImovelListDto>> ListAll();
    }
}
