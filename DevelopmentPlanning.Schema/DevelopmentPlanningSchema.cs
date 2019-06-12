namespace DevelopmentPlanning.Schema
{
    public class DevelopmentPlanningSchema : GraphQL.Types.Schema
    {
        public DevelopmentPlanningSchema(DevelopmentPlanningRepo developmentPlanningRepo)
        {
            Query = new DevelopmentPlanningQuery(developmentPlanningRepo);
            Mutation = new DevelopmentPlanningMutation(developmentPlanningRepo);
        }
    }
}