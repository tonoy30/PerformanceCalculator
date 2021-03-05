using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Hosting;

using PerformanceCalculator.API.Extensions;

namespace PerformanceCalculator.API
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var host = CreateHostBuilder(args).Build();
            host.CreateDbIfNotExists();
            host.Run();
        }

        private static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder => { webBuilder.UseStartup<Startup>(); });
    }
}