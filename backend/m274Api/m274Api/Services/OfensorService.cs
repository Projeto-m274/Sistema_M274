using AutoMapper;
using m274Api.Dtos;
using m274Api.Repositories;

namespace m274Api.Services
{
    public class OfensorService : IOfensorService
    {
        private readonly IMapper _mapper;
        private readonly IOfensorRepository _ofensorRepository;

        public OfensorService(IOfensorRepository ofensorRepository,
            IMapper mapper)
        {
            _mapper = mapper;
            _ofensorRepository = ofensorRepository;
        }
        public async Task<List<OfensorListDto>> ListAll() =>
            (await _ofensorRepository.ListAllAsync())
                .Select(o => _mapper.Map<OfensorListDto>(o))
                    .ToList();
    }
}
