using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using PerformanceCalculator.Business.Specifications;
using PerformanceCalculator.Common.Models;

namespace PerformanceCalculator.Business.Services.Interfaces
{
    public interface IDbService<T> where T : BaseModel
    {
        Task<IReadOnlyList<T>> GetAsync();

        Task<T> GetByIdAsync(Guid id);
        Task CreateAsync(T model);

        Task UpdateAsync(T model);

        Task DeleteAsync(T model);

        Task<bool> IsExists(Guid id);

        Task<T> GetModelWithSpec(ISpecification<T> spec);

        Task<List<T>> ListAsync(ISpecification<T> spec);
        T GetByStorageProcedure(string procedure, string args);
    }
}