using m274Api.AutoMapper.Attributes;
using m274Api.Models;

namespace m274Api.Dtos
{
    [MapTypeFrom(typeof(LPU))]
    public class LPUListDto
    {
        public long Id { get; set; }

        public string Codigo { get; set; }

        public string Descricao { get; set; }
    }
}
