using Microsoft.AspNetCore.Identity;
using PerformanceCalculator.Common.Dtos.Auth;

namespace PerformanceCalculator.Common.Models.Auth
{
    public class AppUser : IdentityUser
    {
        public string DisplayName { get; set; }
        public Role Role { get; set; }
    }
}