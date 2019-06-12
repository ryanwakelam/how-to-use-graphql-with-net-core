using GraphQL.Resolvers;
using GraphQL.Types;

namespace DevelopmentPlanning.Schema
{
    public class DevelopmentPlanningSubscription : ObjectGraphType<object>
    {
        public DevelopmentPlanningSubscription(DevelopmentPlanningRepo developmentPlanningRepo)
        {
            AddField(new EventStreamFieldType
            {
                Name = "deliverableAdded",
                Type = typeof(DeliverableType),
                Resolver = new FuncFieldResolver<Deliverable>(context => context.Source as Deliverable),
                Subscriber = new EventStreamResolver<Deliverable>(context => developmentPlanningRepo.SubscribeDeliverable())
            });
        }
    }
}