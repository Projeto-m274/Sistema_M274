using System.ComponentModel.DataAnnotations.Schema;

namespace m274Api.Models
{
    [Table(nameof(Demanda))]
    public class Demanda
    {
        public long Id { get; set; }

        public long ResponsavelId { get; set; }

        [ForeignKey(nameof(ResponsavelId))]
        public Usuario Responsavel { get; set; }

        public long LPUEstadoClienteValorId { get; set; }

        [ForeignKey(nameof(LPUEstadoClienteValorId))]
        public LPUEstadoClienteValor LPUEstadoClienteValor { get; set; }

        public long ImovelId { get; set; }

        [ForeignKey(nameof(ImovelId))]
        public Imovel Imovel { get; set; }

        public DateTime PrevisaoProtocolo { get; set; }

        public DateTime? MedicaoProtocolo { get; set; }

        public DateTime PrevisaoConclusao { get; set; }

        public DateTime? MedicaoConclusao { get; set; }

        public string? Protocolo { get; set; }

        public string? DocumentoExpedido { get; set; }

        public DateTime? DataVencimento { get; set; }

        public List<Ocorrencia> Historico { get; set; }

        public long OfensorId { get; set; }

        [ForeignKey(nameof(OfensorId))]
        public Ofensor Ofensor { get; set; }

        public long StatusId { get; set; }

        [ForeignKey(nameof(StatusId))]
        public Status Status { get; set; }

        public long DemandaLiberadaId { get; set; }

        [ForeignKey(nameof(DemandaLiberadaId))]
        public DemandaLiberada DemandaLiberada { get; set; }
    }
}
