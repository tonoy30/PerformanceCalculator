using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using PerformanceCalculator.Business.DbContexts;

namespace PerformanceCalculator.API.Extensions
{
    public static class DbContextExtensions
    {
        public static IServiceCollection AddDbContexts(this IServiceCollection services,
            IConfiguration configuration)
        {
            services.AddDbContext<ApplicationDbContext>(option =>
                option.UseSqlServer(configuration.GetConnectionString("DefaultConnection"))
            );
            return services;
        }
    }
}