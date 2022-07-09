using AutoMapper;
using m274Api.AutoMapper.Attributes;
using m274Api.AutoMapper.Extensions;

namespace m274Api.AutoMapper.Profiles
{
    public class DefaultProfile : Profile
    {
        public DefaultProfile()
        {
            Type[] types = typeof(MapTypeAttribute).Assembly.GetTypes();
            var query = from type in types
                        where type.GetCustomAttributes(typeof(MapTypeAttribute), true).Length > 0
                        select type;

            List<Type> mappingTypes = query.ToList();
            foreach (var mappingType in mappingTypes)
            {
                var mapAttribute = (MapTypeAttribute)Attribute.GetCustomAttribute(mappingType, typeof(MapTypeAttribute));
                if (mapAttribute.Source)
                    this.CreateDefaultMap(mappingType, mapAttribute.MappingType);
                else
                    this.CreateDefaultMap(mapAttribute.MappingType, mappingType);

            }
        }
    }
}
