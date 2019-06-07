using GraphQL.Types;

namespace DevelopmentPlanning.Schema
{
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
}