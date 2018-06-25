using Microsoft.WindowsAzure.Storage.Table;

namespace Monatsziele.Repository.EntityModels
{
    public class GoalEntity : TableEntity
    {
        public GoalEntity(string username, string id) : base(username, id)
        {
            PartitionKey = username;
            RowKey = id;
        }

        public GoalEntity() { }

        public string Name { get; set; }
        public string Description { get; set; }
        public double InitialAmount { get; set; }
        public double CurrentAmount { get; set; }
        public double TargetAmount { get; set; }
        public double CurrentPercentage { get; set; }
        public string AmountUnitOfMeasurement { get; set; }
    }
}
