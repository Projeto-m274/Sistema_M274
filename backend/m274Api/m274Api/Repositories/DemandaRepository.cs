using m274Api.EntityFramework;
using m274Api.Models;
using m274Api.Repositories.Base;

namespace m274Api.Repositories
{
    public class DemandaRepository : BaseRepository<Demanda>, IDemandaRepository
    {
        public DemandaRepository(DataContext context) : base(context)
        {
        }
    }
}
