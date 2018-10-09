using System.Collections.Generic;
using AmbitionJournalRazor.Models;

namespace AmbitionJournalRazor.Repositories
{
    public interface IAmbitionRepository
    {
        IList<Ambition> GetAmbitions();
    }
}