namespace m274Api.AutoMapper.Attributes
{
    public class MapTypeAttribute : Attribute
    {
        public Type MappingType { get; set; }
        public bool Source { get; set; }

        public MapTypeAttribute(Type mappingType)
        {
            MappingType = mappingType;
            Source = true;
        }
    }
}
