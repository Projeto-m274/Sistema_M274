using m274Api.Repositories.Base;
using m274Api.Services.Base;

namespace m274Api.Extensions
{
    public static class ServiceCollectionExtensions
    {
        public static readonly Type[] _assemblyTypes = AppDomain.CurrentDomain.GetAssemblies()
           .SelectMany(assembly => assembly.GetTypes())
           .ToArray();

        public static IServiceCollection AddRepositories(this IServiceCollection services)
        {
            return services.AddImplementingServices<IRepository>();
        }

        public static IServiceCollection AddApplicationServices(this IServiceCollection services)
        {
            return services.AddImplementingServices<IApplicationService>();
        }

        private static IServiceCollection AddImplementingServices<TInterface>(this IServiceCollection services)
        {
            Type[] types = AppDomain.CurrentDomain.GetAssemblies().SelectMany(assembly => assembly.GetTypes()).ToArray();
            var query = from type in types
                        where type.IsInterface && typeof(TInterface).IsAssignableFrom(type)
                        select type;

            List<Type> interfaceTypes = query.ToList();
            foreach (var interfaceType in interfaceTypes)
            {
                if (interfaceType != typeof(TInterface))
                {
                    Type implementationType = types.Where(type => interfaceType.IsAssignableFrom(type) && !type.IsInterface && !type.IsAbstract).FirstOrDefault();
                    if (implementationType != null)
                        services = services.AddTransient(interfaceType, implementationType);
                }
            }
            return services;
        }
    }
}
