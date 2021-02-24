using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using PerformanceCalculator.Common.Models.Auth;

namespace PerformanceCalculator.Business.DbContexts
{
    public class IdentityDbContext : IdentityDbContext<AppUser>
    {
        public IdentityDbContext(DbContextOptions<IdentityDbContext> options): base(options)
        {
            
        }
    }
}