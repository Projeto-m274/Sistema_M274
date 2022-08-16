using m274Api.AutoMapper.Attributes;
using m274Api.Models;

namespace m274Api.Dtos
{
    [MapTypeFrom(typeof(Demanda))]
    public class DemandaListDto
    {
        public long Id { get; set; }

        public long ResponsavelId { get; set; }

        public UsuarioCleanListDto Responsavel { get; set; }

        public long LPUEstadoClienteValorId { get; set; }

        public LPUEstadoClienteValorListDto LPUEstadoClienteValor { get; set; }

        public long ImovelId { get; set; }

        public ImovelListDto Imovel { get; set; }

        public DateTime PrevisaoProtocolo { get; set; }

        public DateTime? MedicaoProtocolo { get; set; }

        public DateTime PrevisaoConclusao { get; set; }

        public DateTime? MedicaoConclusao { get; set; }

        public string? Protocolo { get; set; }

        public string? DocumentoExpedido { get; set; }

        public DateTime? DataVencimento { get; set; }

        public List<OcorrenciaDemandaListDto> Historico { get; set; }

        public long OfensorId { get; set; }

        public OfensorListDto Ofensor { get; set; }

        public long StatusId { get; set; }

        public StatusListDto Status { get; set; }

        public long DemandaLiberadaId { get; set; }

        public DemandaLiberadaListDto DemandaLiberada { get; set; }
    }
}
