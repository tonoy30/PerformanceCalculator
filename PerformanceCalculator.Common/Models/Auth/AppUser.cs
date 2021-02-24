using Microsoft.AspNetCore.Identity;

namespace PerformanceCalculator.Common.Models.Auth
{
    public class AppUser : IdentityUser
    {
        public string DisplayName { get; set; }
    }
}