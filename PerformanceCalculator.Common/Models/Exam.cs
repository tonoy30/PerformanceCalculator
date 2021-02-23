using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using PerformanceCalculator.Common.Constants;

namespace PerformanceCalculator.Common.Models
{
    public class Exam : BaseModel
    {
        public string Title { get; set; }
        [Required]
        [Range(0, 100)]
        public int TotalMark { get; set; }

        [Range(0, 100)]
        [Column(TypeName = "decimal(18, 2)")]
        public decimal ObtainedMark { get; set; }
        public ExamTypeEnum ExamTypeEnum { get; set; }
        public Course Course { get; set; }
    }
}