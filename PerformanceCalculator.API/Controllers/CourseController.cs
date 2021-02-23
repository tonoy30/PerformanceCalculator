using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using PerformanceCalculator.Business.Services;
using PerformanceCalculator.Common.Models;

namespace PerformanceCalculator.API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CourseController : ControllerBase
    {
        private readonly ILogger<CourseController> _logger;
        private readonly IDbService<Course> _service;

        public CourseController(ILogger<CourseController> logger, IDbService<Course> service)
        {
            _logger = logger;
            _service = service;
        }

        [HttpGet]
        public async Task<ActionResult<IReadOnlyList<Course>>> GetAsync()
        {
            var data = await _service.GetAsync();
            return Ok(data);
        }

        [HttpPost]
        public async Task<ActionResult<Course>> PostAsync(Course course)
        {
            await _service.CreateAsync(course);
            return Ok(course);
        }
    }
}