using System;
using PerformanceCalculator.Business.Specifications;
using PerformanceCalculator.Common.Models;

namespace PerformanceCalculator.API.Specifications
{
    public class StudentWithCoursesSpecification : BaseSpecification<Student>
    {
        public StudentWithCoursesSpecification(Guid id) : base(x => x.Id == id)
        {
            AddInclude(x => x.Courses);
        }

        public StudentWithCoursesSpecification()
        {
            AddInclude(x => x.Courses);
        }
    }
}