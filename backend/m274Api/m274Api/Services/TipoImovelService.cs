using AutoMapper;
using m274Api.Dtos;
using m274Api.Repositories;

namespace m274Api.Services
{
    public class TipoImovelService : ITipoImovelService
    {
        private readonly IMapper _mapper;
        private readonly ITipoImovelRepository _tipoImovelRepository;

        public TipoImovelService(ITipoImovelRepository tipoImovelRepository,
            IMapper mapper)
        {
            _mapper = mapper;
            _tipoImovelRepository = tipoImovelRepository;
        }

        public async Task<List<TipoImovelListDto>> ListAll() =>
            (await _tipoImovelRepository.ListAllAsync())
                .Select(t => _mapper.Map<TipoImovelListDto>(t))
                    .ToList();        
    }
}
