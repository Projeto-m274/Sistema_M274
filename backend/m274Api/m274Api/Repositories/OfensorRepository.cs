using m274Api.EntityFramework;
using m274Api.Models;
using m274Api.Repositories.Base;

namespace m274Api.Repositories
{
    public class OfensorRepository : BaseRepository<Ofensor>, IOfensorRepository
    {
        public OfensorRepository(DataContext context) : base(context)
        {
        }
    }
}
