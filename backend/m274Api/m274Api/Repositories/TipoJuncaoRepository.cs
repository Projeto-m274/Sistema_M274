using m274Api.EntityFramework;
using m274Api.Models;
using m274Api.Repositories.Base;

namespace m274Api.Repositories
{
    public class TipoJuncaoRepository : BaseRepository<TipoJuncao>, ITipoJuncaoRepository
    {
        public TipoJuncaoRepository(DataContext context) : base(context)
        {
        }
    }
}
