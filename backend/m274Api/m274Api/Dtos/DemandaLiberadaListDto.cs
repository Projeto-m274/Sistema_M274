using m274Api.AutoMapper.Attributes;
using m274Api.Models;

namespace m274Api.Dtos
{
    [MapTypeFrom(typeof(DemandaLiberada))]
    public class DemandaLiberadaListDto
    {
        public long Id { get; set; }

        public string Descricao { get; set; }
    }
}
