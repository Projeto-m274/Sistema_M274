using m274Api.EntityFramework;
using m274Api.Models;
using m274Api.Repositories.Base;

namespace m274Api.Repositories
{
    public class DemandaLiberadaRepository : BaseRepository<DemandaLiberada>, IDemandaLiberadaRepository
    {
        public DemandaLiberadaRepository(DataContext context) : base(context)
        {
        }
    }
}
