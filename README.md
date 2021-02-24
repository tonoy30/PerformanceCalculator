### Advance Database Lab Project 
[Advance Database Course](https://learn.saylor.org/course/view.php?id=91)


### Creating Database
```sql
CREATE DATABASE performance_calculator
    WITH 
    OWNER = postgres
    ENCODING = 'UTF8'
    CONNECTION LIMIT = -1;
```

### Step to Run This Application
#### Common
* dotnet ef migrations add -s PerformanceCalculator.API/ -p PerformanceCalculator.Business/ --context <context_name> -o Migrations/<folder_name> <migration_name>
* dotnet ef database <update or drop> -s PerformanceCalculator.API/ -p PerformanceCalculator.Business/ --context <context_name>
* On your terminal cd into Application Folder and run `dotnet ef migrations add <AnyName>` and then run `dotnet ef database update`
#### Docker
* On your terminal cd into Application Folder and run `docker-compose up --build -d` and go to  `http://localhost:5000`
#### Non-Docker user
* make sure you have installed:
    * postgres
    * dotnet SDK
* after installing all of these, On your terminal cd into Application Folder and run `dotnet run` or `dotnet watch run`
 
### Tools
* Visual Studio 2019
* Entity Framework
* git
