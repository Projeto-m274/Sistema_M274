using m274Api.Dtos;
using m274Api.Services.Base;
using QuebraGalho.Dtos;

namespace m274Api.Services
{
    public interface IUsuarioService : IApplicationService
    {
        Task<UsuarioCleanListDto> CreateUsuario(UsuarioCreateDto usuarioDto);
        Task<List<UsuarioCleanListDto>> ListAll();
    }
}
