using m274Api.Dtos;
using m274Api.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace m274Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OcorrenciaController : ControllerBase
    {
        [HttpGet]
        public async Task<ActionResult<List<OcorrenciaListDto>>> ListAll(
           [FromServices] IOcorrenciaService ocorrenciaService) =>
           await ocorrenciaService.ListAll();
    }
}
