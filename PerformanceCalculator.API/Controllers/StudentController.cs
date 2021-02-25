using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PerformanceCalculator.API.Specifications;
using PerformanceCalculator.Business.Services;
using PerformanceCalculator.Business.Services.Interfaces;
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
    }
}