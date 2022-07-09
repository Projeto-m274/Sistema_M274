using Microsoft.EntityFrameworkCore;
using m274Api.EntityFramework;

namespace m274Api.Repositories.Base
{
    public abstract class BaseRepository<TEntity> where TEntity : class
    {
        protected DataContext Context { get; private set; }
        protected DbSet<TEntity> DbSet { get; private set; }
        public BaseRepository(DataContext context)
        {
            Context = context;
            DbSet = Context.Set<TEntity>();
        }

        public virtual void Insert(TEntity entity)
        {
            Context.Add(entity);
        }

        public virtual void Update(TEntity entity)
        {
            Context.Update(entity);
        }

        public virtual async Task<List<TEntity>> ListAllAsync()
        {
            return await Context.Set<TEntity>().ToListAsync();
        }

        public virtual async Task<TEntity> FindByIdAsync(long id)
        {
            return await DbSet.FindAsync(id);
        }

        public virtual async Task SaveChangesAsync()
        {
            await Context.SaveChangesAsync();
        }

        public virtual bool Any()
        {
            return DbSet.Any();
        }
    }
}
