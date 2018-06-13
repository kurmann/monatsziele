using Microsoft.WindowsAzure.Storage.Table;

namespace Monatsziele.Api.Models
{
    public class Goal : TableEntity
    {
        public Goal(string username, string id) : base(username, id)
        {
            PartitionKey = username;
            RowKey = id;
        }

        public string Name { get; set; }
    }
}
