using Microsoft.EntityFrameworkCore.Migrations;
using PerformanceCalculator.Business.SQLHelper.Procedures;

namespace PerformanceCalculator.Business.SQLHelper
{
    public static class SqlRegister
    {
        public static void RegisterSql(this MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql(TeacherSql.SpGetTeacherById());
            migrationBuilder.Sql(CourseSql.CoursesByTeacherView());
            migrationBuilder.Sql(CourseSql.CourseInsertTrigger());
        }
        public static void DropSql(this MigrationBuilder migrationBuilder )
        {
            migrationBuilder.Sql(TeacherSql.DropSpGetTeacherById());
            migrationBuilder.Sql(CourseSql.DropCoursesByTeacherView());
            migrationBuilder.Sql(CourseSql.DropCourseInsertTrigger());
        }
    }
}