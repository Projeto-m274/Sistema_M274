using System.ComponentModel.DataAnnotations.Schema;

namespace m274Api.Models
{
    [Table(nameof(TipoImovel))]
    public class TipoImovel
    {
        public long Id { get; set; }

        public string NomeTipoImovel { get; set; }
    }
}
