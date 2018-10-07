using System.Collections.Generic;
using AmbitionManagement.Events;

namespace AmbitionManagement.EventStore
{
    public class InMemoryEventStore : IEventStore
    {
        private IList<Event> _events = new List<Event>();

        public void Save<T>(T @event) where T : Event
        {
            _events.Add(@event);
        }
    }
}