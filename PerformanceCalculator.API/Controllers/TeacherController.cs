using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PerformanceCalculator.API.Specifications;
using PerformanceCalculator.Business.DbContexts;
using PerformanceCalculator.Business.Services.Interfaces;
using PerformanceCalculator.Common.Models;

namespace PerformanceCalculator.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TeacherController : ControllerBase
    {
        private readonly IDbService<Teacher> _service;
        private readonly IDbService<Course> _courseService;

        public TeacherController(IDbService<Teacher> service, IDbService<Course> courseService)
        {
            _service = service;
            _courseService = courseService;
        }

        [HttpGet]
        public async Task<ActionResult<IReadOnlyList<Teacher>>> GetAsync()
        {
            var spec = new TeacherWithCourseSpecification();
            var data = await _service.ListAsync(spec);
            return Ok(data);
        }

        [HttpGet("{id}", Name = "GetTeacherById")]
        public async Task<ActionResult<IReadOnlyList<Teacher>>> GetCourseAsync(Guid id)
        {
            var spec = new TeacherWithCourseSpecification(id);
            var teacher = await _service.GetModelWithSpec(spec);
            return Ok(teacher);
        }

        [HttpPost]
        public async Task<ActionResult<Teacher>> PostAsync(Teacher teacher)
        {
            await _service.CreateAsync(teacher);
            return teacher;
        }

        [HttpPut("add-course/{teacherId}/{courseId}")]
        public async Task<ActionResult<Teacher>> AddCourseAsync(Guid teacherId, Guid courseId)
        {
            var course = await _courseService.GetByIdAsync(courseId);
            var teacher = await _service.GetByIdAsync(teacherId);
            teacher.Courses = new List<Course>
            {
                course
            };
            await _service.UpdateAsync(teacher);
            return teacher;
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTeacherAsync(Guid id)
        {
	        var teacher = await _service.GetByIdAsync(id);
	        if (teacher == null)
	        {
		        return NotFound();
	        }

	        await _service.DeleteAsync(teacher);
	        return NoContent();
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<Student>> UpdateStudentAsync(Guid id, Teacher teacher)
        {
	        if (id != teacher.Id)
	        {
		        return BadRequest();
	        }

	        var spec = new TeacherWithCourseSpecification(id);
	        var data = await _service.GetModelWithSpec(spec);
	        if (data == null)
	        {
		        return NotFound();
	        }

	        try
	        {
		        data = teacher;
		        await _service.UpdateAsync(data);
	        }
	        catch (DbUpdateConcurrencyException)
	        {
		        var isExist = await _service.IsExists(data.Id);
		        if (!isExist)
		        {
			        return NotFound();
		        }
	        }

	        return Ok(data);
        }
    }
}