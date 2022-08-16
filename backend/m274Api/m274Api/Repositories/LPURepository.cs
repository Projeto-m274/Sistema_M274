using m274Api.EntityFramework;
using m274Api.Models;
using m274Api.Repositories.Base;

namespace m274Api.Repositories
{
    public class LPURepository : BaseRepository<LPU>, ILPURepository
    {
        public LPURepository(DataContext context) : base(context)
        {
        }
    }
}
