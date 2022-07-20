using System.ComponentModel.DataAnnotations.Schema;

namespace m274Api.Models
{
    [Table(nameof(LPU))]
    public class LPU
    {
        public long Id { get; set; }

        public string Codigo { get; set; }

        public string Descricao { get; set; }
    }
}
