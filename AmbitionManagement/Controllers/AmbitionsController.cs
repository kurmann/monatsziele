using System;
using System.Collections.Generic;
using AmbitionManagement.Models;
using Microsoft.AspNetCore.Mvc;

namespace AmbitionManagement.Controllers {

    [Route ("api/[controller]")]
    public class AmbitionsController : ControllerBase {

        private List<Ambition> _ambitions = new List<Ambition> {
            new Ambition {
                Id = Guid.NewGuid(),
                Name = "Sample Ambition"
            }
        };

        [HttpGet]
        public ActionResult<List<Ambition>> Get() {
            return _ambitions;
        }

        [HttpPost]
        public void Post ([FromBody] string name) {
            var ambition = new Ambition {
                Id = Guid.NewGuid(),
                Name = name
            };
            _ambitions.Add(ambition);
         }
    }

}