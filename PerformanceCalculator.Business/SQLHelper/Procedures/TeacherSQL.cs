namespace PerformanceCalculator.Business.SQLHelper.Procedures
{
    public static class TeacherSql
    {
        public static string SpGetTeacherById()
        {
            return @"CREATE PROCEDURE SpGetTeacherById 
                        @Id uniqueidentifier
                    as
                    BEGIN
	                    Select * from Teachers
	                        where Id = @Id 
                    END";
        }

        public static string DropSpGetTeacherById()
        {
            return @"DELETE PROCEDURE SpGetTeacherById";
        }
    }
}