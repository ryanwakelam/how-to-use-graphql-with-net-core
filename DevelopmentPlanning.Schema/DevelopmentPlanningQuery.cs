using System.Collections.Generic;
using System.Linq;
using GraphQL.Types;

namespace DevelopmentPlanning.Schema
{
    public class DevelopmentPlanningQuery : ObjectGraphType
    {
        public DevelopmentPlanningQuery(IList<Deliverable> deliverables)
        {
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
}