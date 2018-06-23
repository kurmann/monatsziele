using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.WindowsAzure.Storage;
using Microsoft.WindowsAzure.Storage.Table;
using Monatsziele.Repository.Models;

namespace Monatsziele.Repository
{
    public class GoalsRepository
    {
        private readonly CloudTableClient _cloudTableClient;
        private const string GoalsEntityName = "Goals";

        public GoalsRepository(string tableStorageConnectionString)
        {
            var storageAccount = CloudStorageAccount.Parse(tableStorageConnectionString);
            _cloudTableClient = storageAccount.CreateCloudTableClient();
        }

        public async Task<List<GoalEntity>> GetGoalsEntities()
        {
            var cloudTable = await GetTable(_cloudTableClient, GoalsEntityName);
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

        public async Task<TableResult> GetGoalEntity(Guid id)
        {
            var cloudTable = await GetTable(_cloudTableClient, GoalsEntityName);
            var tableOperation = TableOperation.Retrieve<GoalEntity>("kurmannwillisau@me.com", id.ToString());

            return cloudTable.ExecuteAsync(tableOperation)?.Result;
        }

        private static async Task<CloudTable> GetTable(CloudTableClient tableClient, string tableName)
        {
            // get table
            var tableReference = tableClient.GetTableReference(tableName);

            // create if not exists
            await tableReference.CreateIfNotExistsAsync();

            return tableReference;
        }
    }
}
