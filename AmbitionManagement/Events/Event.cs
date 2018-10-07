using System;

namespace AmbitionManagement.Events
{
    public class Event
    {
        public string Id { get; set; }
        public string Type { get; set; }
        public Guid AggregateId { get; set; }
        public DateTime Timestamp { get; set; }
        public string Data { get; set; }
    }
}