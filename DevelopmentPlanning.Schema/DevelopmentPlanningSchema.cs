using GraphQL.Types;
using System.Linq;

namespace DevelopmentPlanning.Schema
{
    public class DevelopmentPlanningSchema : GraphQL.Types.Schema
    {
        public DevelopmentPlanningSchema()
        {
            Query = new DevelopmentPlanningQuery();
        }
    }

    public class DevelopmentPlanningQuery : ObjectGraphType
    {
        public DevelopmentPlanningQuery()
        {
            var deliverables = new []
            {
                new Deliverable{Id = "1", Name = "Daily data enhancements", PBI = "VN-2739", Status = "Completed", Description = "Long clothes lanyard Plate Fleet barkadeer bucko Shiver me timbers Sea Legs matey piracy clipper. "},
                new Deliverable{Id = "2", Name = "US Reporting", PBI = "VN-2844", Status = "In-Progress", Description = "Nipperkin lookout aye Pirate Round hogshead mutiny loaded to the gunwalls Jack Tar Jack Ketch gabion."},
                new Deliverable{Id = "3", Name = "Misc. Bugs / Regression", PBI = "", Status = "Scoping", Description = "Mizzenmast code of conduct bucko Sea Legs loot pirate spirits marooned scourge of the seven seas Arr."},
            };
            
            Field<ListGraphType<DeliverableType>>("deliverables", resolve: context => deliverables);
            Field<DeliverableType>("deliverable",
                arguments: new QueryArguments(new QueryArgument<IdGraphType> {Name = "id"}), resolve:
                context =>
                {
                    var id = context.GetArgument<string>("id");
                    return deliverables.First(x => x.Id == id);
                });
        }
    }

    public class DeliverableType : ObjectGraphType<Deliverable>
    {
        public DeliverableType()
        {
            Field(o => o.Id, type: typeof(IdGraphType));
            Field(o => o.Name);
            Field(o => o.PBI).Name("pbi");
            Field(o => o.Status);
            Field(o => o.Description);
        }
    }

    public class Deliverable
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string PBI { get; set; }
        public string Status { get; set; }
        public string Description { get; set; }
    }
}