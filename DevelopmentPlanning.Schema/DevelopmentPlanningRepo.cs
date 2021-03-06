using System;
using System.Collections.Generic;
using System.Linq;
using System.Reactive.Linq;
using System.Reactive.Subjects;

namespace DevelopmentPlanning.Schema
{
    public class DevelopmentPlanningRepo
    {
        private readonly ISubject<Deliverable> _deliverableStream = new ReplaySubject<Deliverable>(0);
        
        private List<Deliverable> _deliverables = new List<Deliverable>
        {
            new Deliverable{Id = "1", Name = "Daily data enhancements", PBI = "VN-2739", Status = "Completed", Description = "Long clothes lanyard Plate Fleet barkadeer bucko Shiver me timbers Sea Legs matey piracy clipper. "},
            new Deliverable{Id = "2", Name = "US Reporting", PBI = "VN-2844", Status = "In-Progress", Description = "Nipperkin lookout aye Pirate Round hogshead mutiny loaded to the gunwalls Jack Tar Jack Ketch gabion."},
            new Deliverable{Id = "3", Name = "Misc. Bugs / Regression", PBI = "", Status = "Scoping", Description = "Mizzenmast code of conduct bucko Sea Legs loot pirate spirits marooned scourge of the seven seas Arr."},
        };

        public List<Deliverable> Deliverables => _deliverables.ToList();

        public IObservable<Deliverable> SubscribeDeliverable()
        {
            return _deliverableStream.AsObservable();
        }
        
        public void AddDeliverable(Deliverable deliverable)
        {
            _deliverables.Add(deliverable);
            _deliverableStream.OnNext(deliverable);
        }
    }
}