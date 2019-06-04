using GraphQL.Types;

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
            Field<ListGraphType<DeliverableType>>("deliverables", resolve: context => new []
            {
                new Deliverable{Id = "1", Name = "Daily data enhancements", PBI = "VN-2739", Status = "Completed"},
                new Deliverable{Id = "2", Name = "US Reporting", PBI = "VN-2844", Status = "In-Progress"},
                new Deliverable{Id = "3", Name = "Misc. Bugs / Regression", PBI = "", Status = "Scoping"},
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
        }
    }

    public class Deliverable
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string PBI { get; set; }
        public string Status { get; set; }
    }
}