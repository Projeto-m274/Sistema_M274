using AutoMapper;
using m274Api.Dtos;
using m274Api.Repositories;

namespace m274Api.Services
{
    public class SegmentoService : ISegmentoService
    {
        private readonly IMapper _mapper;
        private readonly ISegmentoRepository _segmentoRepository;

        public SegmentoService(ISegmentoRepository segmentoRepository,
            IMapper mapper)
        {
            _mapper = mapper;
            _segmentoRepository = segmentoRepository;
        }

        public async Task<List<SegmentoListDto>> ListAll() =>
            (await _segmentoRepository.ListAllAsync())
                .Select(s => _mapper.Map<SegmentoListDto>(s))
                    .ToList();
    }
}
