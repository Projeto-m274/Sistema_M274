namespace m274Api.AutoMapper.Attributes
{
    public class UseResolverAttribute : Attribute
    {
        public Type ValueResolverType { get; private set; }
        public UseResolverAttribute(Type valueResolverType)
        {
            ValueResolverType = valueResolverType;
        }
    }
}
