using Monatsziele.Repository;

namespace Monatsziele.Api.Models
{
    public class Goal
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public double InitialAmount { get; set; }
        public double CurrentAmount { get; set; }
        public double TargetAmount { get; set; }
        public double CurrentPercentage { get; set; }
        public string AmountUnitOfMeasurement { get; set; }
    }
}
