using m274Api.Dtos;
using m274Api.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace m274Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PerfilController : ControllerBase
    {
        [HttpGet]
        [Authorize(Roles = "Admin")]
        public ActionResult<List<PerfilListDto>> ListAll(
           [FromServices] IPerfilService perfilService) =>
            perfilService.ListAll();
        
    }
}
