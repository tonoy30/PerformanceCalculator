using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using PerformanceCalculator.Common.Constants;

namespace PerformanceCalculator.Common.Models
{
    public class Teacher : BaseModel
    {
        [Required] public string FirstName { get; set; }
        [Required] public string LastName { get; set; }

        [Required]
        [DataType(DataType.EmailAddress)]
        public string Email { get; set; }

        [Required]
        [DataType(DataType.PhoneNumber)]
        public string PhoneNo { get; set; }

        [Required] public DesignationEnum Designation { get; set; }
        public ICollection<Course> Courses { get; set; }
    }
}