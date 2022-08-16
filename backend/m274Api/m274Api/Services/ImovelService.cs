using AutoMapper;
using m274Api.Dtos;
using m274Api.Repositories;

namespace m274Api.Services
{
    public class ImovelService : IImovelService
    {
        private readonly IMapper _mapper;
        private readonly IImovelRepository _imovelRepository;

        public ImovelService(IImovelRepository imovelRepository,
            IMapper mapper)
        {
            _mapper = mapper;
            _imovelRepository = imovelRepository;
        }

        public async Task<List<ImovelListDto>> ListAll() =>
            (await _imovelRepository.ListAllAsync())
                .Select(i => _mapper.Map<ImovelListDto>(i))
                    .ToList();
    }
}
