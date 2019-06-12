using System;
using GraphQL.Types;

namespace DevelopmentPlanning.Schema
{
    public class DevelopmentPlanningMutation : ObjectGraphType
    {
        public DevelopmentPlanningMutation(DevelopmentPlanningRepo developmentPlanningRepo)
        {
            Field<DeliverableType>("createDeliverable",
                arguments: new QueryArguments(new QueryArgument<NonNullGraphType<DeliverableInputType>>
                    {Name = "deliverable"}),
                resolve: context =>
                {
                    var deliverable = context.GetArgument<Deliverable>("deliverable");
                    deliverable.Id = Guid.NewGuid().ToString();
                    developmentPlanningRepo.AddDeliverable(deliverable);

                    return deliverable;
                });   
        }
    }
}