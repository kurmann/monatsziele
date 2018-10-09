using System;
using System.Collections.Generic;
using AmbitionJournal.Events;
using AmbitionJournal.EventStore;
using AmbitionJournal.Models;
using Microsoft.AspNetCore.Mvc;

namespace AmbitionJournal.Controllers {

    [Route ("api/[controller]")]
    public class AmbitionsController : ControllerBase
    {  
        [HttpGet]
        public ActionResult<List<Ambition>> Get() {
            return new List<Ambition> {
                new Ambition {
                    Id = new Guid("05309611-f23e-42d4-a946-06b95666aa2d"),
                    Name = "Kugelhantel-Herausforderung"
                },
                new Ambition {
                    Id = new Guid("fdb68427-d318-4db3-aa9c-e1839b7a874e"),
                    Name = "Fahrstunden-Praxis"
                    },
                new Ambition {
                    Id = new Guid("8285694e-bf53-4cf7-a01f-bdf40f86e95e"),
                    Name = "Fahrstunden-Theorie"
                }
            };
        }

        [HttpPost]
        public void Post ([FromBody] string name) {
            var eventStore = new InMemoryEventStore();
            var ambitionCreatedEvent = new AmbitionCreatedEvent(name);
            eventStore.Save(ambitionCreatedEvent);
         }
    }

}