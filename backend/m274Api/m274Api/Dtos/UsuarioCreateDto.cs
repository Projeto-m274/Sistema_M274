using m274Api.AutoMapper.Attributes;
using m274Api.Models;

namespace QuebraGalho.Dtos
{
    [MapType(typeof(Usuario))]
    public class UsuarioCreateDto
    {
        public string Nome { get; set; }
        public string UserName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public int PerfilId { get; set; }
    }
}
