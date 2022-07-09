using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using m274Api.Dtos;
using m274Api.Models;
using m274Api.Repositories;
using m274Api.Services;

namespace m274Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly ITokenService _tokenService;

        public AccountController(ITokenService tokenService)
        {
            _tokenService = tokenService;
        }

        [HttpPost]
        [Route("login")]
        [AllowAnonymous]
        public async Task<ActionResult<dynamic>> Login([FromServices] IUsuarioRepository usuarioRepository,
                                            [FromServices] IMapper mapper,
                                            [FromBody] LoginDto model)
        {
            var usuario = usuarioRepository.GetByUserName(model.UserName);
            var result = await usuarioRepository.SignInAsync(model.UserName, model.Password);

            if (!result.Succeeded)
                return NotFound(new { message = "Usuário ou senha inválidos" });

            var token = await _tokenService.GenerateToken(usuario);
            
            return new
            {
                usuario = mapper.Map<UsuarioCleanListDto>(usuario),
                token = token
            };
        }

        [HttpGet]
        [Route("TestAuthorization")]
        [Authorize]
        public IActionResult TestAuthorization()=> Ok("You're Authorized");
        
    }
}
