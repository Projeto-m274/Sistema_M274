using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using m274Api.Dtos;
using m274Api.Models;
using m274Api.Repositories;
using m274Api.Services;
using QuebraGalho.Dtos;

namespace QuebraGalho.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsuarioController : ControllerBase
    {
        public UsuarioController()
        {

        }

        [HttpGet]
        [Authorize(Roles ="Admin")]
        public async Task<ActionResult<List<UsuarioCleanListDto>>> ListAll(
            [FromServices] IUsuarioService usuarioService) =>
            await usuarioService.ListAll();
        

        [HttpPost]
        //[Authorize(Roles = "Admin")]
        public async Task<ActionResult<UsuarioCleanListDto>> Create([FromServices] IMapper mapper,
                                            [FromBody] UsuarioCreateDto model,
                                            [FromServices] UserManager<Usuario> UserManager,
                                           [FromServices] IUsuarioService usuarioService)
        {
            return await usuarioService.CreateUsuario(model);
            //var result = await UserManager.CreateAsync(model, model.PasswordHash);

            //if (!result.Succeeded)
            //    throw new Exception(result.Errors.First().Description);

            //result = await UserManager.AddToRoleAsync(model, "Admin");

            //if (!result.Succeeded)
            //    throw new Exception(result.Errors.First().Description);

            //return mapper.Map<UsuarioCleanListDto>(model);
        }

    }
}
