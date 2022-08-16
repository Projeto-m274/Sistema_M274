using m274Api.AutoMapper.Attributes;
using m274Api.Models;

namespace m274Api.Dtos
{
    [MapTypeFrom(typeof(Endereco))]
    public class EnderecoListDto
    {
        public long Id { get; set; }

        public string Logradouro { get; set; }

        public string Numero { get; set; }

        public int Cep { get; set; }

        public string UF { get; set; }

        public string Cidade { get; set; }

        public long EstadoId { get; set; }

        public EstadoListDto Estado { get; set; }
    }
}
