using System.ComponentModel.DataAnnotations.Schema;

namespace m274Api.Models
{
    [Table(nameof(Endereco))]
    public class Endereco
    {
        public long Id { get; set; }

        public string Logradouro { get; set; }

        public string Numero { get; set; }

        public int Cep { get; set; }

        public string UF { get; set; }

        public string Cidade { get; set; }

        public long EstadoId { get; set; }

        [ForeignKey(nameof(EstadoId))]
        public Estado Estado { get; set; }
    }
}
