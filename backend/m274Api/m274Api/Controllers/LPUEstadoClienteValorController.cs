using m274Api.Dtos;
using m274Api.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace m274Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LPUEstadoClienteValorController : ControllerBase
    {
        [HttpGet]
        public async Task<ActionResult<List<LPUEstadoClienteValorListDto>>> ListAll(
           [FromServices] ILPUEstadoClienteValorService lpuEstadoClienteValorService) =>
           await lpuEstadoClienteValorService.ListAll();
    }
}
