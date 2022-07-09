namespace m274Api.AutoMapper.Attributes
{
    public class MapTypeFrom : MapTypeAttribute
    {
        public MapTypeFrom(Type mappingType) : base(mappingType)
        {
            Source = false;
        }
    }
}
