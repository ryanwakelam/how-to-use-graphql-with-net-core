using System.Linq;
using GraphQL.Types;

namespace DevelopmentPlanning.Schema
{
    public class DevelopmentPlanningQuery : ObjectGraphType
    {
        public DevelopmentPlanningQuery(DevelopmentPlanningRepo developmentPlanningRepo)
        {
            Field<ListGraphType<DeliverableType>>("deliverables", resolve: context => developmentPlanningRepo.Deliverables);
            Field<DeliverableType>("deliverable",
                arguments: new QueryArguments(new QueryArgument<IdGraphType> {Name = "id"}), resolve:
                context =>
                {
                    var id = context.GetArgument<string>("id");
                    return developmentPlanningRepo.Deliverables.First(x => x.Id == id);
                });
        }
    }
}