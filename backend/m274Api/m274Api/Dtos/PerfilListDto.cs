using m274Api.AutoMapper.Attributes;
using m274Api.Models;

namespace m274Api.Dtos
{
    [MapTypeFrom(typeof(Perfil))]
    public class PerfilListDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }
}
