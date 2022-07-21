using m274Api.AutoMapper.Attributes;
using m274Api.Models;

namespace m274Api.Dtos
{
    [MapTypeFrom(typeof(Estado))]
    public class EstadoListDto
    {
        public long Id { get; set; }

        public string Nome { get; set; }

        public long RegiaoId { get; set; }

        public RegiaoListDto Regiao { get; set; }
    }
}
