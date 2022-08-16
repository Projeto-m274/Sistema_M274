using m274Api.AutoMapper.Attributes;
using m274Api.Models;

namespace m274Api.Dtos
{
    [MapTypeFrom(typeof(TipoImovel))]
    public class TipoImovelListDto
    {
        public long Id { get; set; }

        public string NomeTipoImovel { get; set; }
    }
}
