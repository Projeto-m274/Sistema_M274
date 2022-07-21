﻿using m274Api.Dtos;
using m274Api.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace m274Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EstadoController : ControllerBase
    {
        [HttpGet]
        public async Task<ActionResult<List<EstadoListDto>>> ListAll(
            [FromServices] IEstadoService estadoService) =>
            await estadoService.ListAll();
    }
}
