using m274Api.Dtos;
using m274Api.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace m274Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LPUController : ControllerBase
    {
        [HttpGet]
        public async Task<ActionResult<List<LPUListDto>>> ListAll(
           [FromServices] ILPUService lpuService) =>
           await lpuService.ListAll();
    }
}
