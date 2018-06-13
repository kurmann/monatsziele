using Microsoft.AspNetCore.Mvc;
using Microsoft.WindowsAzure.Storage;
using Microsoft.WindowsAzure.Storage.Table;

namespace Monatsziele.Api.Controllers
{
    public class TablesController : Controller
    {
        public CloudTableClient TableClient { get; set; }

        public void CreateTable()
        {
            // table storage client
            var tableCloudStorageAccount = CloudStorageAccount.Parse("monatsziele_AzureStorageConnectionString");
            TableClient = tableCloudStorageAccount.CreateCloudTableClient();

            // get table reference
            var goalTable = TableClient.GetTableReference("Goals");
            
        }
    }
}