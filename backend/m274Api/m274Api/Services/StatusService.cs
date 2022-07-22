using AutoMapper;
using m274Api.Dtos;
using m274Api.Repositories;

namespace m274Api.Services
{
    public class StatusService : IStatusService
    {
        private readonly IMapper _mapper;
        private readonly IStatusRepository _statusRepository;

        public StatusService(IStatusRepository statusRepository,
            IMapper mapper)
        {
            _mapper = mapper;
            _statusRepository = statusRepository;
        }

        public async Task<List<StatusListDto>> ListAll()=>
            (await _statusRepository.ListAllAsync())
                .Select(s =>_mapper.Map<StatusListDto>(s))
                    .ToList();
    }
}
