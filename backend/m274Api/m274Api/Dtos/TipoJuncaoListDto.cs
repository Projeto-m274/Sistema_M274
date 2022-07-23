using m274Api.AutoMapper.Attributes;
using m274Api.Models;

namespace m274Api.Dtos
{
    [MapTypeFrom(typeof(TipoJuncao))]
    public class TipoJuncaoListDto
    {
        public long Id { get; set; }

        public string NomeTipoJuncao { get; set; }
    }
}
