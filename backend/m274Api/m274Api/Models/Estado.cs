using System.ComponentModel.DataAnnotations.Schema;

namespace m274Api.Models
{
    [Table(nameof(Estado))]
    public class Estado
    {
        public long Id { get; set; }

        public string Nome { get; set; }

        public long RegiaoId { get; set; }

        [ForeignKey(nameof(RegiaoId))]
        public Regiao Regiao { get; set; }
    }
}
