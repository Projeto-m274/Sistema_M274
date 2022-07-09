using m274Api.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace m274Api.EntityFramework
{
    public class DataContext : IdentityDbContext<Usuario, Perfil, long>
    {
        public DataContext(DbContextOptions<DataContext> options) :
            base(options)
        {
        }

    }
}
