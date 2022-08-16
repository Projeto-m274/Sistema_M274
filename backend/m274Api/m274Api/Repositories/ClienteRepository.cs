using m274Api.EntityFramework;
using m274Api.Models;
using m274Api.Repositories.Base;

namespace m274Api.Repositories
{
    public class ClienteRepository : BaseRepository<Cliente>, IClienteRepository
    {
        public ClienteRepository(DataContext context) : base(context)
        {
        }
    }
}
