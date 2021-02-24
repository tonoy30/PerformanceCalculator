using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using PerformanceCalculator.API.Specifications;
using PerformanceCalculator.Business.Services;
using PerformanceCalculator.Business.Services.Interfaces;
using PerformanceCalculator.Common.Models;

namespace PerformanceCalculator.API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TeacherController : ControllerBase
    {
        private readonly IDbService<Teacher> _service;

        public TeacherController(IDbService<Teacher> service)
        {
            _service = service;
        }

        [HttpGet]
        public async Task<ActionResult<IReadOnlyList<Teacher>>> GetAsync()
        {
            var spec = new TeacherWithCourseSpecification();
            var data = await _service.ListAsync(spec);
            return Ok(data);
        }

        [HttpPost]
        public async Task<ActionResult<Teacher>> PostAsync(Teacher teacher)
        {
            await _service.CreateAsync(teacher);
            return teacher;
        }
    }
}