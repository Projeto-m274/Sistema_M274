using AutoMapper;
using m274Api.Dtos;
using m274Api.Models;
using m274Api.Repositories;
using QuebraGalho.Dtos;

namespace m274Api.Services
{
    public class UsuarioService : IUsuarioService
    {
        private readonly IMapper _mapper;
        private readonly IUsuarioRepository _usuarioRepository;

        public UsuarioService(IUsuarioRepository usuarioRepository,
            IMapper mapper)
        {
            _mapper = mapper;
            _usuarioRepository = usuarioRepository;
        }

        public async Task<UsuarioCleanListDto> CreateUsuario(UsuarioCreateDto usuarioDto)
        {
            var usuario = _mapper.Map<Usuario>(usuarioDto);

            var result = await _usuarioRepository.CreateAsync(usuario,
                usuarioDto.Password, usuarioDto.PerfilId);

            if (!result.Succeeded)
                throw new Exception(result.Errors.First().Description);

            return _mapper.Map<UsuarioCleanListDto>(usuario);
        }

        public async Task<List<UsuarioCleanListDto>> ListAll() =>
            (await _usuarioRepository.ListAllAsync())
                .Select(u => _mapper.Map<UsuarioCleanListDto>(u)).ToList();
        
    }
}
