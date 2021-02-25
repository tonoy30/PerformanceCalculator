using System;

namespace PerformanceCalculator.Common.Dtos
{
    public class CourseDto
    {
        public Guid Id { get; set; }
        public string Title { get; set; }
        public string Code { get; set; }
        public float Credit { get; set; }
        public string Year { get; set; }
        public string Semester { get; set; }
    }
}