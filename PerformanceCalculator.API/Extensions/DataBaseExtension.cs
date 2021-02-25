using System;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using PerformanceCalculator.Business.DbContexts;

namespace PerformanceCalculator.API.Extensions
{
    public static class DataBaseExtension
    {
        public static void CreateDbIfNotExists(this IHost host)
        {
            using var scope = host.Services.CreateScope();
            var services = scope.ServiceProvider;
            try
            {
                var context = services.GetRequiredService<ApplicationDbContext>();
                if (context.Database.CanConnect())
                {
                    context.Database.EnsureCreated();
                }

                var identityContext = services.GetRequiredService<IdentityDbContext>();
                if (identityContext.Database.CanConnect())
                {
                    identityContext.Database.EnsureCreated();
                }
            }
            catch (Exception ex)
            {
                var logger = services.GetRequiredService<ILogger<Program>>();
                logger.LogError(ex, "An error occurred creating the DB");
            }
        }
    }
}