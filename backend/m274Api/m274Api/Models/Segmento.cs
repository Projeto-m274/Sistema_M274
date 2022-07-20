using System.ComponentModel.DataAnnotations.Schema;

namespace m274Api.Models
{
    [Table(nameof(Segmento))]
    public class Segmento
    {
        public long Id { get; set; }

        public string NomeSegmento { get; set; }
    }
}
