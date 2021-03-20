using System;
using System.Collections.Generic;
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
    public class CourseController : ControllerBase
    {
        private readonly IDbService<Course> _service;
        private readonly IDbService<Exam> _examService;

        public CourseController(IDbService<Course> service, IDbService<Exam> examService)
        {
            _service = service;
            _examService = examService;
        }

        [HttpGet]
        public async Task<ActionResult<IReadOnlyList<Course>>> GetAsync()
        {
            var data = await _service.GetAsync();
            return Ok(data);
        }

        [HttpGet("teacher/{teacherMail}")]
        public async Task<ActionResult<IReadOnlyList<Course>>> GetCourseTeacherAsync(string teacherMail)
        {
            var data = await _service.GetAsync();

            return Ok(data);
        }

        [HttpGet("{id}", Name = "GetCourseById")]
        public async Task<ActionResult<Course>> GetByIdAsync(Guid id)
        {
            var spec = new CourseWithExamSpecification(id);
            var data = await _service.GetModelWithSpec(spec);
            if (data == null)
            {
                return NotFound();
            }

            return Ok(data);
        }

        [HttpPost]
        public async Task<ActionResult<Course>> PostAsync(Course course)
        {
            await _service.CreateAsync(course);
            return CreatedAtRoute("GetCourseById", new {id = course.Id}, course);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<Student>> UpdateCourseAsync(Guid id, Course course)
        {
            var spec = new CourseWithExamSpecification(id);
            var data = await _service.GetModelWithSpec(spec);
            if (data == null)
            {
                return NotFound();
            }

            try
            {
                data = course;
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
        public async Task<IActionResult> DeleteCourseAsync(Guid id)
        {
            var course = await _service.GetByIdAsync(id);
            if (course == null)
            {
                return NotFound();
            }

            await _service.DeleteAsync(course);
            return NoContent();
        }

        [HttpPut("add-exam/{courseId}/{examId}")]
        public async Task<ActionResult<IReadOnlyList<Course>>> AddExamAsync(Guid courseId, Guid examId)
        {
            var data = await _service.GetByIdAsync(courseId);
            var exam = await _examService.GetByIdAsync(examId);
            data.Exams = new List<Exam>
            {
                exam
            };
            await _service.UpdateAsync(data);
            return Ok(data);
        }
    }
}