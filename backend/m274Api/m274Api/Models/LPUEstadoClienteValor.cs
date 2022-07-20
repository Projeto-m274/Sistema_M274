using System.ComponentModel.DataAnnotations.Schema;

namespace m274Api.Models
{
    [Table(nameof(LPUEstadoClienteValor))]
    public class LPUEstadoClienteValor
    {
        public long Id { get; set; }

        public long LPUId { get; set; }

        [ForeignKey(nameof(LPUId))]
        public LPU LPU { get; set; }

        public long EstadoId { get; set; }

        [ForeignKey(nameof(EstadoId))]
        public Estado Estado { get; set; }

        public long ClienteId { get; set; }

        [ForeignKey(nameof(ClienteId))]
        public Cliente Cliente { get; set; }

        public float Valor { get; set; }
    }
}
