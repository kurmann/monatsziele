using System;

namespace Monatsziele.Api.Models
{
    public class Recording
    {

        public Guid Id { get; set; }

        public Guid GoalId { get; set; }

        public DateTime Date { get; set; }

        public double Amount { get; set; }

        public string Comment { get; set; }

        public DateTime ItemCreatedDate { get; set; }

    }
}
