using System.ComponentModel.DataAnnotations.Schema;

namespace m274Api.Models
{
    [Table(nameof(DemandaLiberada))]
    public class DemandaLiberada
    {
        public long Id { get; set; }

        public string Descricao { get; set; }
    }
}
