using Microsoft.Extensions.DependencyInjection;
using PerformanceCalculator.Business.Services;

namespace PerformanceCalculator.API.Extensions
{
    public static class ServicesExtension
    {
        public static IServiceCollection AddServices(this IServiceCollection services)
        {
            services.AddScoped(typeof(IDbService<>), typeof(DbService<>));
            return services;
        }
    }
}