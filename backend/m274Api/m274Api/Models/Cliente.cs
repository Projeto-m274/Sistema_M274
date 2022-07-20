using System.ComponentModel.DataAnnotations.Schema;

namespace m274Api.Models
{
    [Table(nameof(Cliente))]
    public class Cliente
    {
        public long Id { get; set; }

        public string Nome { get; set; }

        public int? CNPJ { get; set; }
    }
}
