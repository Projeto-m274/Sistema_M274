using System.ComponentModel.DataAnnotations.Schema;

namespace m274Api.Models
{
    [Table(nameof(TipoJuncao))]
    public class TipoJuncao
    {
        public long Id { get; set; }

        public string NomeTipoJuncao { get; set; }    
    }
}
