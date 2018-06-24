using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.WindowsAzure.Storage.Table;
using Monatsziele.Repository.Models;

namespace Monatsziele.Repository
{
    public interface IGoalRepository
    {
        Task<CloudTable> GetTable(string tableName);

        Task<List<GoalEntity>> GetGoalsEntities();

        Task<TableResult> GetGoalEntity(Guid id);
    }
}
