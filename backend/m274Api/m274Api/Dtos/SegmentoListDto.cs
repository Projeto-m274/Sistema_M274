using m274Api.AutoMapper.Attributes;
using m274Api.Models;

namespace m274Api.Dtos
{
    [MapTypeFrom(typeof(Segmento))]
    public class SegmentoListDto
    {
        public long Id { get; set; }

        public string NomeSegmento { get; set; }
    }
}
