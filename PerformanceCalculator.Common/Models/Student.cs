using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace PerformanceCalculator.Common.Models
{
    public class Student: BaseModel
    {
        
        [Required]
        [MaxLength(100)]
        public string FirstName { get; set; }
        [Required]
        [MaxLength(100)]
        public string LastName { get; set; }
        [Required]
        [DataType(DataType.EmailAddress)]
        public string Email { get; set; }
        [Required]
        [MaxLength(10)]
        public string RegistrationNo { get; set; }
        [DataType(DataType.PhoneNumber)]
        public string PhoneNo { get; set; }
        [Required]
        [MinLength(7), MaxLength(7)]
        public string Session { get; set; }
        public ICollection<Course> Courses { get; set; }
    }
}