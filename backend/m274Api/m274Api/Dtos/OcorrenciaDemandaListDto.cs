using m274Api.AutoMapper.Attributes;
using m274Api.Models;

namespace m274Api.Dtos
{
    [MapTypeFrom(typeof(Ocorrencia))]
    public class OcorrenciaDemandaListDto
    {
        public long Id { get; set; }

        public string Descricao { get; set; }

        public DateTime Data { get; set; }

        public long DemandaId { get; set; }
    }
}
