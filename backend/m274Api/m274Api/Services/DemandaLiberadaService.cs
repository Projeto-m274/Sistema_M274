using AutoMapper;
using m274Api.Dtos;
using m274Api.Repositories;

namespace m274Api.Services
{
    public class DemandaLiberadaService : IDemandaLiberadaService
    {
        private readonly IMapper _mapper;
        private readonly IDemandaLiberadaRepository _demandaLiberadaRepository;

        public DemandaLiberadaService(IDemandaLiberadaRepository demandaLiberadaRepository,
            IMapper mapper)
        {
            _mapper = mapper;
            _demandaLiberadaRepository = demandaLiberadaRepository;
        }

        public async Task<List<DemandaLiberadaListDto>> ListAll()
        {
            return (await _demandaLiberadaRepository.ListAllAsync()).
                        Select(d => _mapper.Map<DemandaLiberadaListDto>(d))
                            .ToList();
        }
    }
}
