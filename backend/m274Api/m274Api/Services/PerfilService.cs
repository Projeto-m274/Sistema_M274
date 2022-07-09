using AutoMapper;
using m274Api.Dtos;
using m274Api.Models;
using Microsoft.AspNetCore.Identity;

namespace m274Api.Services
{
    public class PerfilService : IPerfilService
    {
        private readonly IMapper _mapper;
        private readonly RoleManager<Perfil> _roleManager;

        public PerfilService(RoleManager<Perfil> roleManager,
            IMapper mapper)
        {
            _mapper = mapper;
            _roleManager = roleManager;
        }

        public List<PerfilListDto> ListAll()=>
             _roleManager.Roles.Select(
                r => _mapper.Map<PerfilListDto>(r)).ToList();
    }
}
