using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PerformanceCalculator.API.Specifications;
using PerformanceCalculator.Business.Services.Interfaces;
using PerformanceCalculator.Common.Models;

namespace PerformanceCalculator.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class StudentController : ControllerBase
    {
        private readonly IDbService<Student> _service;
        private readonly IDbService<Course> _courseService;

        public StudentController(IDbService<Student> service, IDbService<Course> courseService)
        {
            _service = service;
            _courseService = courseService;
        }

        [HttpGet]
        public async Task<ActionResult<IReadOnlyList<Student>>> GetAsync()
        {
            var data = await _service.GetAsync();
            return Ok(data);
        }

        [HttpGet("students/{courseId}")]
        public async Task<ActionResult<IReadOnlyList<Student>>> GetStudentByCourseAsync(Guid courseId)
        {
            var spec = new StudentWithCoursesSpecification();
            var students = await _service.ListAsync(spec);
            var data = students.Where(s => s.Courses.Any(o => o.Id == courseId)).ToList();
            return Ok(data);
        }

        [HttpPost]
        public async Task<ActionResult<Student>> PostAsync(Student student)
        {
            await _service.CreateAsync(student);
            return Ok(student);
        }

        [HttpGet("{id}", Name = "GetById")]
        public async Task<ActionResult<Student>> GetStudentIdIdAsync(Guid id)
        {
            var spec = new StudentWithCoursesSpecification(id);
            var data = await _service.GetModelWithSpec(spec);
            if (data == null)
            {
                return NotFound();
            }

            return Ok(data);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<Student>> UpdateStudentAsync(Guid id, Student student)
        {
            if (id != student.Id)
            {
                return BadRequest();
            }

            var spec = new StudentWithCoursesSpecification(id);
            var data = await _service.GetModelWithSpec(spec);
            if (data == null)
            {
                return NotFound();
            }

            try
            {
                data = student;
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

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteStudentAsync(Guid id)
        {
            var student = await _service.GetByIdAsync(id);
            if (student == null)
            {
                return NotFound();
            }

            await _service.DeleteAsync(student);
            return NoContent();
        }

        [HttpPut("add-course/{studentId}/{courseId}")]
        public async Task<ActionResult<Student>> AddCourseAsync(Guid studentId, Guid courseId)
        {
            var course = await _courseService.GetByIdAsync(courseId);
            var student = await _service.GetByIdAsync(studentId);
            student.Courses = new List<Course>
            {
                course
            };
            await _service.UpdateAsync(student);
            return student;
        }
    }
}