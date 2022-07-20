using System.ComponentModel.DataAnnotations.Schema;

namespace m274Api.Models
{
    [Table(nameof(Regiao))]
    public class Regiao
    {
        public long Id { get; set; }

        public string NomeRegiao { get; set; }
    }
}
