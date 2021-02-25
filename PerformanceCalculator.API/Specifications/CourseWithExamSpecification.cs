using System;
using PerformanceCalculator.Business.Specifications;
using PerformanceCalculator.Common.Models;

namespace PerformanceCalculator.API.Specifications
{
    public class CourseWithExamSpecification: BaseSpecification<Course>
    {
        public CourseWithExamSpecification()
        {
            AddInclude(x => x.Exams);
        }
        public CourseWithExamSpecification(Guid id): base(x => x.Id == id)
        {
            AddInclude(x => x.Exams);
        }
    }
}