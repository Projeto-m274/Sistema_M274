using m274Api.AutoMapper.Attributes;
using m274Api.Models;

namespace m274Api.Dtos
{
    [MapTypeFrom(typeof(Regiao))]
    public class RegiaoListDto
    {
        public long Id { get; set; }

        public string NomeRegiao { get; set; }
    }
}
