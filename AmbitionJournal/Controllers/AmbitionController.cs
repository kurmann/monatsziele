using AmbitionJournal.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace AmbitionJournal.Controllers
{
    public class AmbitionController : Controller
    {
        [HttpPost]
        public IActionResult Create([FromBody] string name)
        {
            var ambitionRepository = new AmbitionRepository();
            var ambitions = ambitionRepository.CreateAmbition(name);
            return View(ambitions);
        }
    }
}