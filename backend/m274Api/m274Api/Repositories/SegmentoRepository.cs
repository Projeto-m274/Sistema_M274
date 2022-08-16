using m274Api.EntityFramework;
using m274Api.Models;
using m274Api.Repositories.Base;

namespace m274Api.Repositories
{
    public class SegmentoRepository : BaseRepository<Segmento>, ISegmentoRepository
    {
        public SegmentoRepository(DataContext context) : base(context)
        {
        }
    }
}
