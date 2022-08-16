using m274Api.EntityFramework;
using m274Api.Models;
using m274Api.Repositories.Base;

namespace m274Api.Repositories
{
    public class TipoImovelRepository : BaseRepository<TipoImovel>, ITipoImovelRepository
    {
        public TipoImovelRepository(DataContext context) : base(context)
        {
        }
    }
}
