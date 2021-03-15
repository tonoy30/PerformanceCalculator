using AutoMapper;
using PerformanceCalculator.Common.Dtos;
using PerformanceCalculator.Common.Extensions;
using PerformanceCalculator.Common.Models;

namespace PerformanceCalculator.Common.Profilers
{
    public class CourseProfiler : Profile
    {
        // TODO: dto at Exams 
        public CourseProfiler()
        {
            CreateMap<Course, CourseDto>()
                .ForMember(cd => cd.Semester,
                    o => o.MapFrom(c => c.Semester.GetDisplayName()));
                
        }
    }
}