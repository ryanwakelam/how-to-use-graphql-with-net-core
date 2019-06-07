using System;
using System.Collections.Generic;
using GraphQL.Types;

namespace DevelopmentPlanning.Schema
{
    public class DevelopmentPlanningMutation : ObjectGraphType
    {
        public DevelopmentPlanningMutation(IList<Deliverable> deliverables)
        {
            Field<DeliverableType>("createDeliverable",
                arguments: new QueryArguments(new QueryArgument<NonNullGraphType<DeliverableInputType>>
                    {Name = "deliverable"}),
                resolve: context =>
                {
                    var deliverable = context.GetArgument<Deliverable>("deliverable");
                    deliverable.Id = Guid.NewGuid().ToString();
                    deliverables.Add(deliverable);

                    return deliverable;
                });   
        }
    }
}