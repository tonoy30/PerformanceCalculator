namespace PerformanceCalculator.Common.Dtos.Auth
{
    public class RegisterDto: LoginDto
    {
        public Role Role { get; set; }
    }
}