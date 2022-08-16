using m274Api.AutoMapper.Attributes;
using m274Api.Models;

namespace m274Api.Dtos
{
    [MapTypeFrom(typeof(LPUEstadoClienteValor))]
    public class LPUEstadoClienteValorListDto
    {
        public long Id { get; set; }

        public long LPUId { get; set; }

        public LPUListDto LPU { get; set; }

        public long EstadoId { get; set; }

        public EstadoListDto Estado { get; set; }

        public long ClienteId { get; set; }

        public ClienteListDto Cliente { get; set; }

        public float Valor { get; set; }
    }
}
