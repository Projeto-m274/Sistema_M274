using m274Api.EntityFramework;
using m274Api.Models;
using m274Api.Repositories.Base;

namespace m274Api.Repositories
{
    public class StatusRepository : BaseRepository<Status>, IStatusRepository
    {
        public StatusRepository(DataContext context) : base(context)
        {
        }
    }
}
