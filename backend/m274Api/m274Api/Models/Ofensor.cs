using System.ComponentModel.DataAnnotations.Schema;

namespace m274Api.Models
{
    [Table(nameof(Ofensor))]
    public class Ofensor
    {
        public long Id { get; set; }

        public string NomeOfensor { get; set; }
    }
}
