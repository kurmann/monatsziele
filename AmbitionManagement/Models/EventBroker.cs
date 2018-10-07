using System.Collections.Generic;

namespace AmbitionManagement.Models {

    public class EventBroker {
        public IList<Event> Events { get; set; } = new List<Event> ();
    }

}