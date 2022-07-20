using System.ComponentModel.DataAnnotations.Schema;

namespace m274Api.Models
{
    [Table(nameof(Status))]
    public class Status
    {
        public long Id { get; set; }

        public string Descricao { get; set; }
    }
}
