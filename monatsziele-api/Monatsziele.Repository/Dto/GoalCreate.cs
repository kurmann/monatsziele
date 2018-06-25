namespace Monatsziele.Repository.Dto
{
    public class GoalCreate
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public double InitialAmount { get; set; }
        public double TargetAmount { get; set; }
        public string AmountUnitOfMeasurement { get; set; }
    }
}
