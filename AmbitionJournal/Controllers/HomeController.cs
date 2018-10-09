using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using AmbitionJournal.Models;
using AmbitionJournal.Repositories;

namespace AmbitionJournal.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            var ambitionRepository = new AmbitionRepository();
            var ambitions = ambitionRepository.GetAmbitions();
            return View(ambitions);
        }
    }
}
