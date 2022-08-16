using m274Api.Dtos;
using m274Api.Services.Base;

namespace m274Api.Services
{
    public interface IOfensorService : IApplicationService
    {
        Task<List<OfensorListDto>> ListAll();
    }
}