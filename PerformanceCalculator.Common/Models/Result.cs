using System;
using System.Collections.Generic;

namespace PerformanceCalculator.Common.Models
{
    public class Result : BaseModel
    {
        public ICollection<Exam> Exams { get; set; }
        public Course Course { get; set; }
        public Teacher Teacher { get; set; }
        public Student Student { get; set; }
    }
}