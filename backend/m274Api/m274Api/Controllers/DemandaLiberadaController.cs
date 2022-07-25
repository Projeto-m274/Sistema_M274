using m274Api.Dtos;
using m274Api.Services;
using Microsoft.AspNetCore.Mvc;

namespace m274Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DemandaLiberadaController : ControllerBase
    {
        [HttpGet]
        public async Task<ActionResult<List<DemandaLiberadaListDto>>> ListAll(
           [FromServices] IDemandaLiberadaService demandaLiberadaService) =>
           await demandaLiberadaService.ListAll();
    }
}
