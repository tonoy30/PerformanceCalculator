using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using PerformanceCalculator.Business.Services;
using PerformanceCalculator.Common.Models;

namespace PerformanceCalculator.API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class StudentController : ControllerBase
    {
        private readonly IDbService<Student> _service;

        public StudentController(IDbService<Student> service)
        {
            _service = service;
        }

        [HttpGet]
        public async Task<ActionResult<IReadOnlyList<Student>>> GetAsync()
        {
            var data = await _service.GetAsync();
            return Ok(data);
        }

        [HttpPost]
        public async Task<ActionResult<Student>> PostAsync(Student student)
        {
            await _service.CreateAsync(student);
            return Ok(student);
        }
    }
}