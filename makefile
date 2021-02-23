migrations:
    dotnet ef migrations add -s PerformanceCalculator.API/ -p PerformanceCalculator.Business/ -o Migrations Initial001
update:
    dotnet ef database update -s PerformanceCalculator.API/ -p PerformanceCalculator.Business/
drop:
    dotnet ef database drop -s PerformanceCalculator.API/ -p PerformanceCalculator.Business/ 
