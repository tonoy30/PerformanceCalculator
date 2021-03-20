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

        [HttpPut("{id}")]
        public async Task<ActionResult<Student>> UpdateCourseAsync(Guid id, Exam exam)
        {
            var data = await _service.GetByIdAsync(id);
            if (data == null)
            {
                return NotFound();
            }

            try
            {
                data = exam;
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
        public async Task<IActionResult> DeleteExamAsync(Guid id)
        {
            var exam = await _service.GetByIdAsync(id);
            if (exam == null)
            {
                return NotFound();
            }

            await _service.DeleteAsync(exam);
            return NoContent();
        }
    }
}