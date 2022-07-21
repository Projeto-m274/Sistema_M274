using AutoMapper;
using m274Api.Dtos;
using m274Api.Repositories;

namespace m274Api.Services
{
    public class EstadoService : IEstadoService
    {
        private readonly IMapper _mapper;
        private readonly IEstadoRepository _estadoRepository;

        public EstadoService(IEstadoRepository estadoRepository,
            IMapper mapper)
        {
            _mapper = mapper;
            _estadoRepository = estadoRepository;
        }

        public async Task<List<EstadoListDto>> ListAll()=>
            (await _estadoRepository.ListAllAsync())
                        .Select(e => _mapper.Map<EstadoListDto>(e))
                        .ToList();
    }
}
