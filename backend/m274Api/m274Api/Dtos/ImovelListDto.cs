using m274Api.AutoMapper.Attributes;
using m274Api.Models;

namespace m274Api.Dtos
{
    [MapTypeFrom(typeof(Imovel))]
    public class ImovelListDto
    {
        public long Id { get; set; }

        public string Identificacao { get; set; }

        public long EnderecoId { get; set; }

        public EnderecoListDto Endereco { get; set; }

        public int? NumeroPonto { get; set; }

        public long? TipoImovelId { get; set; }

        public TipoImovelListDto? TipoImovel { get; set; }

        public long Juncao { get; set; }

        public long TipoJuncaoId { get; set; }

        public TipoJuncaoListDto TipoJuncao { get; set; }

        public int CNPJ { get; set; }

        public long SegmentoId { get; set; }

        public SegmentoListDto Segmento { get; set; }

        public long ClienteId { get; set; }

        public ClienteListDto Cliente { get; set; }
    }
}
