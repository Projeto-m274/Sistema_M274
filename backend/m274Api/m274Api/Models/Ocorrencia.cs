using System.ComponentModel.DataAnnotations.Schema;

namespace m274Api.Models
{
    [Table(nameof(Ocorrencia))]
    public class Ocorrencia
    {
        public long Id { get; set; }

        public string Descricao { get; set; }

        public DateTime Data{ get; set; }

        public long DemandaId { get; set; }

        [ForeignKey(nameof(DemandaId))]
        public Demanda Demanda { get; set; }
    }
}
