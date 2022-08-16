using m274Api.EntityFramework;
using m274Api.Models;
using m274Api.Repositories.Base;

namespace m274Api.Repositories
{
    public class LPUEstadoClienteValorRepository : BaseRepository<LPUEstadoClienteValor>, ILPUEstadoClienteValorRepository
    {
        public LPUEstadoClienteValorRepository(DataContext context) : base(context)
        {
        }
    }
}
