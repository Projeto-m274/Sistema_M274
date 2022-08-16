using AutoMapper;
using m274Api.Dtos;
using m274Api.Repositories;

namespace m274Api.Services
{
    public class ClienteService : IClienteService
    {
        private readonly IMapper _mapper;
        private readonly IClienteRepository _clienteRepository;

        public ClienteService(IClienteRepository  clienteRepository,
            IMapper mapper)
        {
            _mapper = mapper;
            _clienteRepository = clienteRepository;
        }

        public async Task<List<ClienteListDto>> ListAll()=>
            (await _clienteRepository.ListAllAsync())
                .Select(c => _mapper.Map<ClienteListDto>(c))
                    .ToList();
        
    }
}
