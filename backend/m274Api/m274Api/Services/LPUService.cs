using AutoMapper;
using m274Api.Dtos;
using m274Api.Repositories;

namespace m274Api.Services
{
    public class LPUService : ILPUService
    {
        private readonly IMapper _mapper;
        private readonly ILPURepository _lpuRepository;
        public LPUService(ILPURepository lpuRepository,
            IMapper mapper)
        {
            _mapper = mapper;
            _lpuRepository = lpuRepository;
        }

        public async Task<List<LPUListDto>> ListAll() =>
            (await _lpuRepository.ListAllAsync())
                .Select(lpu => _mapper.Map<LPUListDto>(lpu))
                    .ToList();
    }
}
