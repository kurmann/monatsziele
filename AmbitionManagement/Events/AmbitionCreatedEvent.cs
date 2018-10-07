using System;
using AmbitionManagement.Models;
using Newtonsoft.Json;

namespace AmbitionManagement.Events {
    public class AmbitionCreatedEvent : Event {
        public AmbitionCreatedEvent(string name)
        {
            AggregateId = Guid.NewGuid();

            var ambition = new Ambition{
                Id = AggregateId,
                Name = name
            };
            Data = JsonConvert.SerializeObject(ambition);
        }
    }
}