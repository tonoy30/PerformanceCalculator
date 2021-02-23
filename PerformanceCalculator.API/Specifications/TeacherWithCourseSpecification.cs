using PerformanceCalculator.Business.Specifications;
using PerformanceCalculator.Common.Models;

namespace PerformanceCalculator.API.Specifications
{
    public class TeacherWithCourseSpecification : BaseSpecification<Teacher>
    {
        public TeacherWithCourseSpecification()
        {
            AddInclude(t => t.Course);
        }
    }
}