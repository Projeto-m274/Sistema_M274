using AutoMapper;
using m274Api.Dtos;
using m274Api.Repositories;

namespace m274Api.Services
{
    public class TipoJuncaoService : ITipoJuncaoService
    {
        private readonly IMapper _mapper;
        private readonly ITipoJuncaoRepository _tipoJuncaoRepository;

        public TipoJuncaoService(ITipoJuncaoRepository tipoJuncaoRepository,
            IMapper mapper)
        {
            _mapper = mapper;
            _tipoJuncaoRepository = tipoJuncaoRepository;
        }

        public async Task<List<TipoJuncaoListDto>> ListAll() =>
            (await _tipoJuncaoRepository.ListAllAsync())
            .Select(t => _mapper.Map<TipoJuncaoListDto>(t))
            .ToList();
    }
}
