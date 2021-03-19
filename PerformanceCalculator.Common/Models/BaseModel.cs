using System;
using System.ComponentModel.DataAnnotations;

namespace PerformanceCalculator.Common.Models
{
    public class BaseModel
    {
        [Required]
        [Key] 
        public Guid Id { get; set; }
        [DataType(DataType.DateTime)]
        public DateTime? CreatedAt { get; set; }
        [DataType(DataType.DateTime)]
        public DateTime? UpdatedAt { get; set; }

        protected BaseModel()
        {
            Id = Guid.NewGuid();
        }
    }
}