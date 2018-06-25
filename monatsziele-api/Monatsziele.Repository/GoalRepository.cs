using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.WindowsAzure.Storage;
using Microsoft.WindowsAzure.Storage.Table;
using Monatsziele.Repository.Dto;
using Monatsziele.Repository.EntityModels;

namespace Monatsziele.Repository
{
    public class GoalRepository : IGoalRepository
    {
        private readonly RepositoryConfig _configuration;

        public GoalRepository(RepositoryConfig configuration)
        {
            _configuration = configuration;   
        }
        public async Task<TableResult> GetGoalEntity(Guid id)
        {
            var cloudTable = await GetTable("Goals");
            var tableOperation = TableOperation.Retrieve<GoalEntity>("kurmannwillisau@me.com", id.ToString());

            return cloudTable.ExecuteAsync(tableOperation)?.Result;
        }

        public async Task<TableResult> CreateGoal(GoalCreate goalCreate)
        {
            var table = await GetTable("Goals");

            var goalEntity = new GoalEntity("kurmannwillisau@me.com", new Guid().ToString())
                {
                    Description = goalCreate.Description,
                    Name = goalCreate.Name,
                    InitialAmount = goalCreate.InitialAmount,
                    TargetAmount = goalCreate.TargetAmount,
                    AmountUnitOfMeasurement = goalCreate.AmountUnitOfMeasurement
            };

            var insertOperation = TableOperation.Insert(goalEntity);
            return table.ExecuteAsync(insertOperation)?.Result;
        }

        public async Task<List<GoalEntity>> GetGoalsEntities()
        {
            var cloudTable = await GetTable("Goals");
            var continuationToken = default(TableContinuationToken);
            var goals = new List<GoalEntity>();

            var generateFilterCondition = TableQuery.GenerateFilterCondition("PartitionKey", QueryComparisons.Equal, "kurmannwillisau@me.com");
            var query = new TableQuery<GoalEntity>().Where(generateFilterCondition);

            do
            {
                var tableQuerySegment = await cloudTable.ExecuteQuerySegmentedAsync(query, continuationToken);
                continuationToken = tableQuerySegment.ContinuationToken;
                goals.AddRange(tableQuerySegment.Results);
            } while (continuationToken != null);

            return goals;
        }

        public async Task<CloudTable> GetTable(string tableName)
        {
            // get config
            var storageAccount = CloudStorageAccount.Parse(_configuration.AzureStorageConnectionString);

            // table storage client
            var tableClient = storageAccount.CreateCloudTableClient();

            // get table
            var tableReference = tableClient.GetTableReference(tableName);

            // create if not exists
            await tableReference.CreateIfNotExistsAsync();

            return tableReference;
        }
    }
}
