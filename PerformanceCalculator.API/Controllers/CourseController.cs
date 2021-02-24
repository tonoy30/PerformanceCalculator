using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using PerformanceCalculator.Business.Services;
using PerformanceCalculator.Business.Services.Interfaces;
using PerformanceCalculator.Common.Dtos;
using PerformanceCalculator.Common.Models;

namespace PerformanceCalculator.API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CourseController : ControllerBase
    {
        private readonly IMapper _mapper;
        private readonly IDbService<Course> _service;

        public CourseController(IMapper mapper, IDbService<Course> service)
        {
            _mapper = mapper;
            _service = service;
        }

        [HttpGet]
        public async Task<ActionResult<IReadOnlyList<Course>>> GetAsync()
        {
            var data = await _service.GetAsync();
            var mappedData = _mapper.Map<IReadOnlyList<Course>, IReadOnlyList<CourseDto>>(data);
            return Ok(mappedData);
        }

        [HttpPost]
        public async Task<ActionResult<Course>> PostAsync(Course course)
        {
            await _service.CreateAsync(course);
            return Ok(course);
        }
    }
}