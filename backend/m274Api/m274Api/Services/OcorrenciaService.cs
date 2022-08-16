using AutoMapper;
using m274Api.Dtos;
using m274Api.Repositories;

namespace m274Api.Services
{
    public class OcorrenciaService : IOcorrenciaService
    {
        private readonly IMapper _mapper;
        private readonly IOcorrenciaRepository _ocorrenciaRepository;

        public OcorrenciaService(IOcorrenciaRepository ocorrenciaRepository,
            IMapper mapper)
        {
            _mapper = mapper;
            _ocorrenciaRepository = ocorrenciaRepository;
        }

        public async Task<List<OcorrenciaListDto>> ListAll() =>
            (await _ocorrenciaRepository.ListAllAsync())
                .Select(o => _mapper.Map<OcorrenciaListDto>(o))
                    .ToList();
    }
}
