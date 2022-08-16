using m274Api.Dtos;
using m274Api.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace m274Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DemandaController : ControllerBase
    {
        [HttpGet]
        public async Task<ActionResult<List<DemandaListDto>>> ListAll(
            [FromServices] IDemandaService demandaService) =>
           await demandaService.ListAll();
    
    }
}
