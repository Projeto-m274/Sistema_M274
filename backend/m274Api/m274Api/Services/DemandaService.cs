using AutoMapper;
using m274Api.Dtos;
using m274Api.Repositories;

namespace m274Api.Services
{
    public class DemandaService : IDemandaService
    {
        private readonly IMapper _mapper;
        private readonly IDemandaRepository _demandaRepository;

        public DemandaService(IDemandaRepository demandaRepository,
            IMapper mapper)
        {
            _mapper = mapper;
            _demandaRepository = demandaRepository;
        }

        public async Task<List<DemandaListDto>> ListAll() =>
            (await _demandaRepository.ListAllAsync())
                .Select(d => _mapper.Map<DemandaListDto>(d))
                    .ToList();
    }
}
