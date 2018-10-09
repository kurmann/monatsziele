using System.Collections.Generic;
using AmbitionJournalRazor.Models;
using AmbitionJournalRazor.Repositories;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace AmbitionJournalRazor.Pages
{
    public class IndexModel : PageModel
    {
        private readonly IAmbitionRepository ambitionRepository;
        public IList<Ambition> Ambitions;

        public IndexModel(IAmbitionRepository ambitionRepository)
        {
            this.ambitionRepository = ambitionRepository;
        }

        public void OnGet()
        {
            Ambitions = ambitionRepository.GetAmbitions();
        }
    }
}
