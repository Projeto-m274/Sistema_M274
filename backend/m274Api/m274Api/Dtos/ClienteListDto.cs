using m274Api.AutoMapper.Attributes;
using m274Api.Models;

namespace m274Api.Dtos
{
    [MapTypeFrom(typeof(Cliente))]
    public class ClienteListDto
    {
        public long Id { get; set; }

        public string Nome { get; set; }

        public int? CNPJ { get; set; }
    }
}
