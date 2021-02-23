using AutoMapper;
using Microsoft.Extensions.DependencyInjection;
using PerformanceCalculator.Business.Services;
using PerformanceCalculator.Common.Profilers;

namespace PerformanceCalculator.API.Extensions
{
    public static class ServicesExtension
    {
        public static IServiceCollection AddServices(this IServiceCollection services)
        {
            services.AddScoped(typeof(IDbService<>), typeof(DbService<>));
            services.AddAutoMapper(typeof(CourseProfiler));
            return services;
        }
    }

    public class MappingProfiles : Profile
    {
    }
}