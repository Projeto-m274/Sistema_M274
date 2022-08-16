using AutoMapper;
using m274Api.Dtos;
using m274Api.Repositories;

namespace m274Api.Services
{
    public class LPUEstadoClienteValorService : ILPUEstadoClienteValorService
    {
        private readonly IMapper _mapper;
        private readonly ILPUEstadoClienteValorRepository _lpuEstadoClienteValorRepository;

        public LPUEstadoClienteValorService(IMapper mapper,
            ILPUEstadoClienteValorRepository lpuEstadoClienteValorRepository)
        {
            _mapper = mapper;
            _lpuEstadoClienteValorRepository = lpuEstadoClienteValorRepository;
        }
        public async Task<List<LPUEstadoClienteValorListDto>> ListAll() =>
            (await _lpuEstadoClienteValorRepository.ListAllAsync())
                .Select(l => _mapper.Map<LPUEstadoClienteValorListDto>(l))
                    .ToList();
    }
}
