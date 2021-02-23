using AutoMapper;
using PerformanceCalculator.API.Extensions;
using PerformanceCalculator.Common.Dtos;
using PerformanceCalculator.Common.Models;

namespace PerformanceCalculator.Common.Profilers
{
    public class CourseProfiler : Profile
    {
        public CourseProfiler()
        {
            CreateMap<Course, CourseDto>()
                .ForMember(cd => cd.Semester,
                    o => o.MapFrom(c => c.Semester.GetDisplayName()))
                .ForMember(cd => cd.Year, o => o.MapFrom(c => c.Year.Title));
        }
    }
}