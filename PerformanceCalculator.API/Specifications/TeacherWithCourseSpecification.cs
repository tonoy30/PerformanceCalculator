using System;
using PerformanceCalculator.Business.Specifications;
using PerformanceCalculator.Common.Models;

namespace PerformanceCalculator.API.Specifications
{
    public class TeacherWithCourseSpecification : BaseSpecification<Teacher>
    {
        public TeacherWithCourseSpecification()
        {
            AddInclude(t => t.Courses);
        }
        public TeacherWithCourseSpecification(Guid id): base(x => x.Id == id)
        {
            AddInclude(t => t.Courses);
        }
    }
}