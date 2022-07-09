using m274Api.Repositories.Base;

namespace m274Api.Repositories.Base
{
    public interface IBaseRepository<TEntity> : IRepository
    {
        void Insert(TEntity entity);
        void Update(TEntity entity);
        Task<List<TEntity>> ListAllAsync();
        Task<TEntity> FindByIdAsync(long id);
        Task SaveChangesAsync();
        bool Any();
    }
}
