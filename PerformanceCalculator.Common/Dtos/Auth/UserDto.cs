namespace PerformanceCalculator.Common.Dtos.Auth
{
    public class UserDto
    {
        public string Email { get; set; }
        public string DisplayName { get; set; }
        public string Token { get; set; }
        public string Avatar { get; set; }
        
        public Role Role { get; set; }
    }
}