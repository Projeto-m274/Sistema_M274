using m274Api.AutoMapper.Attributes;
using m274Api.Models;

namespace m274Api.Dtos
{
    [MapTypeFrom(typeof(Usuario))]
    public class UsuarioCleanListDto
    {
        public string UserName { get; set; }
        public string Nome { get; set; }

        public string Email { get; set; }
    }
}
