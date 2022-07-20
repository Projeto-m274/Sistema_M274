using System.ComponentModel.DataAnnotations.Schema;

namespace m274Api.Models
{
    [Table(nameof(Imovel))]
    public class Imovel
    {
        public long Id { get; set; }

        public string Identificacao{ get; set; }

        public long EnderecoId { get; set; }

        [ForeignKey(nameof(EnderecoId))]
        public Endereco Endereco { get; set; }

        public int? NumeroPonto { get; set; }

        public long? TipoImovelId { get; set; }

        [ForeignKey(nameof(TipoImovelId))]
        public TipoImovel? TipoImovel { get; set; }

        public long Juncao { get; set; }

        public long TipoJuncaoId { get; set; }

        [ForeignKey(nameof(TipoJuncaoId))]
        public TipoJuncao TipoJuncao { get; set; }

        public int CNPJ { get; set; }

        public long SegmentoId { get; set; }

        [ForeignKey(nameof(SegmentoId))]
        public Segmento Segmento { get; set; }

        public long ClienteId { get; set; }

        [ForeignKey(nameof(ClienteId))]
        public Cliente Cliente { get; set; }
    }
}
