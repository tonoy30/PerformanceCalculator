using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using PerformanceCalculator.Business.Services;
using PerformanceCalculator.Business.Services.Interfaces;
using PerformanceCalculator.Common.Models;

namespace PerformanceCalculator.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ExamController : ControllerBase
    {
        private readonly IDbService<Exam> _service;

        public ExamController(IDbService<Exam> service)
        {
            _service = service;
        }

        [HttpGet]
        public async Task<ActionResult<IReadOnlyList<Exam>>> GetAsync()
        {
            var data = await _service.GetAsync();
            return Ok(data);
        }

        [HttpPost]
        public async Task<ActionResult<Exam>> PostAsync(Exam exam)
        {
            await _service.CreateAsync(exam);
            return Ok(exam);
        }
    }
}