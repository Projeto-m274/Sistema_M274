using AutoMapper;
using m274Api.AutoMapper.Attributes;
using System.Reflection;

namespace m274Api.AutoMapper.Extensions
{
    public static class ProfileExtensions
    {
        public static IMappingExpression CreateDefaultMap<TSource, TDestination>(this Profile profile)
        {
            return profile.CreateDefaultMap(typeof(TSource), typeof(TDestination));
        }

        public static IMappingExpression CreateDefaultMap(this Profile profile, Type sourceType, Type destinationType)
        {
            var defaultMap = profile.CreateMap(sourceType, destinationType);

            PropertyInfo[] sourceProperties = sourceType.GetProperties();

            PropertyInfo[] destinationProperties = destinationType.GetProperties();

            foreach (var destinationProperty in destinationProperties)
            {
                string propertyName = destinationProperty.Name;
                var useResolverAttribute = (UseResolverAttribute)Attribute.GetCustomAttribute(destinationProperty, typeof(UseResolverAttribute));
                if (useResolverAttribute != null)
                    defaultMap.ForMember(propertyName, dest => dest.MapFrom(useResolverAttribute.ValueResolverType));
                else if (sourceProperties.Where(p => p.Name == propertyName).Any())
                    defaultMap = defaultMap.ForMember(propertyName, dest => dest.MapFrom(propertyName));
            }

            //defaultMap.ForAllOtherMembers(prop => prop.Ignore());
            return defaultMap;
        }
    }
}
