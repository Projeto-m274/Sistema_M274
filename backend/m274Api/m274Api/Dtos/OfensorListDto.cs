using m274Api.AutoMapper.Attributes;
using m274Api.Models;

namespace m274Api.Dtos
{
    [MapTypeFrom(typeof(Ofensor))]
    public class OfensorListDto
    {
        public long Id { get; set; }

        public string NomeOfensor { get; set; }
    }
}
