using System;
using System.Collections.Generic;
using AmbitionManagement.Events;
using AmbitionManagement.EventStore;
using AmbitionManagement.Models;
using Microsoft.AspNetCore.Mvc;

namespace AmbitionManagement.Controllers {

    [Route ("api/[controller]")]
    public class AmbitionsController : ControllerBase
    {  
        [HttpGet]
        public ActionResult<List<Ambition>> Get() {
            return null;
        }

        [HttpPost]
        public void Post ([FromBody] string name) {
            var eventStore = new InMemoryEventStore();
            var ambitionCreatedEvent = new AmbitionCreatedEvent(name);
            eventStore.Save(ambitionCreatedEvent);
         }
    }

}