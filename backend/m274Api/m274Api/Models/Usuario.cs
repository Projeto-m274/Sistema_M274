using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations.Schema;

namespace m274Api.Models
{
    [Table(nameof(Usuario))]
    public class Usuario : IdentityUser<long>
    {
        [Column(nameof(Nome))]
        public string Nome { get; set; }
    }
}
