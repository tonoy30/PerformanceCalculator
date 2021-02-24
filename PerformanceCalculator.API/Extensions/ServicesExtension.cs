using Microsoft.Extensions.DependencyInjection;
using PerformanceCalculator.Business.Services;
using PerformanceCalculator.Business.Services.Interfaces;
using PerformanceCalculator.Common.Profilers;

namespace PerformanceCalculator.API.Extensions
{
    public static class ServicesExtension
    {
        public static IServiceCollection AddServices(this IServiceCollection services)
        {
            services.AddScoped(typeof(IDbService<>), typeof(DbService<>));
            services.AddScoped<ITokenService, TokenService>();
            services.AddScoped<AvatarService>();
            services.AddAutoMapper(typeof(CourseProfiler));
            return services;
        }

        public static IServiceCollection AddCrossOrigin(this IServiceCollection services)
        {
            services.AddCors(opt =>
            {
                opt.AddPolicy("CorsPolicy", policy =>
                {
                    policy.WithOrigins(
                            "https://localhost:4200",
                            "http://localhost:4200",
                            "https://localhost:5001",
                            "http://localhost:5000")
                        .AllowAnyHeader()
                        .AllowAnyMethod();
                });
            });
            return services;
        }
    }
}