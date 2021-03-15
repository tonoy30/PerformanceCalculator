﻿using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PerformanceCalculator.API.Specifications;
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
        public async Task<ActionResult<IReadOnlyList<CourseDto>>> GetAsync()
        {
            var data = await _service.GetAsync();
           //  var mappedData = _mapper.Map<IReadOnlyList<Course>, IReadOnlyList<CourseDto>>(data);
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

            var mappedData = _mapper.Map<Course, CourseDto>(data);
            return Ok(mappedData);
        }

        [HttpPost]
        public async Task<ActionResult<Course>> PostAsync(Course course)
        {
            await _service.CreateAsync(course);
            return CreatedAtRoute("GetCourseById", new { id = course.Id }, course);
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
    }
}