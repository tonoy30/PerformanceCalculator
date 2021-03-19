using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using PerformanceCalculator.Business.Services.Interfaces;
using PerformanceCalculator.Common.Models;

namespace PerformanceCalculator.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ResultController : ControllerBase
    {
        private readonly IDbService<Result> _service;

        public ResultController(IDbService<Result> service)
        {
            _service = service;
        }
        [HttpGet]
        public async Task<ActionResult<IReadOnlyList<Result>>> GetAsync()
        {
            var data = await _service.GetAsync();
            return Ok(data);
        }

        [HttpPost]
        public async Task<ActionResult<Exam>> PostAsync(Result result)
        {
            await _service.CreateAsync(result);
            return Ok(result);
        }

    }
}