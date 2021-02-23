using System.Collections.Generic;

namespace PerformanceCalculator.Common.Models
{
    public class Year : BaseModel
    {
        public string Title { get; set; }
        public ICollection<Course> Courses { get; set; }
    }
}