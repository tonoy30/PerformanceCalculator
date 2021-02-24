using PerformanceCalculator.Common.Models.Auth;

namespace PerformanceCalculator.Business.Services.Interfaces
{
    public interface ITokenService
    {
        string CreateToken(AppUser user);
        string ValidateToken(string token);
    }
}