using System;
using AmbitionJournal.Models;
using Newtonsoft.Json;

namespace AmbitionJournal.Events {
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