using System.ComponentModel.DataAnnotations;

namespace PerformanceCalculator.Common.Constants
{
    public enum ExamTypeEnum
    {
        [Display(Name = "Class Test")] ClassTest = 0,
        [Display(Name = "Term Test")] TermTest = 1,
        Quiz = 2,
        Assignment = 3,
        [Display(Name = "Semester Final")] SemesterFinal = 4
    }
}