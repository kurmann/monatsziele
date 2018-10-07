using AmbitionManagement.Events;

namespace AmbitionManagement.EventStore
{
    public interface IEventStore
    {
        void Save<T>(T @event) where T : Event;
    }
}