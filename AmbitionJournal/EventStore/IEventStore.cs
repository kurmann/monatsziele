using AmbitionJournal.Events;

namespace AmbitionJournal.EventStore
{
    public interface IEventStore
    {
        void Save<T>(T @event) where T : Event;
    }
}