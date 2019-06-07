using GraphQL.Types;

namespace DevelopmentPlanning.Schema
{
    public class DeliverableInputType : InputObjectGraphType
    {
        public DeliverableInputType()
        {
            Name = "DeliverableInput";
            Field<NonNullGraphType<StringGraphType>>("name");
            Field<StringGraphType>("pbi");
            Field<StringGraphType>("status");
            Field<StringGraphType>("description");
        }
    }
}