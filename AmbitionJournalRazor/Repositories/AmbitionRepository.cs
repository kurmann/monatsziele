using System;
using System.Collections.Generic;
using AmbitionJournalRazor.Models;

namespace AmbitionJournalRazor.Repositories
{
    public class AmbitionRepository : IAmbitionRepository
    {
        private IList<Ambition> _ambitions {get; set;} = new List<Ambition> {
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

        public IList<Ambition> GetAmbitions() {
            return _ambitions;
        }

        internal Ambition CreateAmbition(string name)
        {
            var newAmbition = new Ambition {
                Id = Guid.NewGuid(),
                Name = name
            };
            _ambitions.Add(newAmbition);
            return newAmbition;
        }
    }
}