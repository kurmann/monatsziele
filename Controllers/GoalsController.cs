using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.WindowsAzure.Storage;
using Microsoft.WindowsAzure.Storage.Table;
using Monatsziele.Api.Models;

namespace Monatsziele.Api.Controllers
{
    [Route("[controller]")]
    public class GoalsController : Controller
    {
        [HttpGet]
        public List<GoalEntity> GetGoals()
        {
            var goalEntities = GetGoalsEntities().Result;
            return goalEntities;
        }

        private static async Task<List<GoalEntity>> GetGoalsEntities()
        {
            var goalsTable = await GetTable("Goals");
            var continuationToken = default(TableContinuationToken);
            var goals = new List<GoalEntity>();

            var generateFilterCondition = TableQuery.GenerateFilterCondition("PartitionKey", QueryComparisons.Equal, "kurmannwillisau@me.com");
            var query = new TableQuery<GoalEntity>().Where(generateFilterCondition);

            do
            {
                var tableQuerySegment = await goalsTable.ExecuteQuerySegmentedAsync(query, continuationToken);
                continuationToken = tableQuerySegment.ContinuationToken;
                goals.AddRange(tableQuerySegment.Results);
            } while (continuationToken != null);

            return goals;
        }

        private static async Task<CloudTable> GetTable(string tableName)
        {
            // table storage client
            var tableCloudStorageAccount = CloudStorageAccount.Parse("monatsziele");
            var tableClient = tableCloudStorageAccount.CreateCloudTableClient();

            // get table
            var tableReference = tableClient.GetTableReference(tableName);
            await tableReference.CreateIfNotExistsAsync();

            return tableReference;
        }
    }
}