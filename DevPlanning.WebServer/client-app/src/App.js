import React, {Component} from 'react';
import './App.css';
import { Layout } from 'antd';
import DevelopmentPlan from "./components/DevelopmentPlan";
import {QueryRenderer} from 'react-relay'
import environment from "./components/Environment";
import graphql from 'babel-plugin-relay/macro';
import DeliverableDetails from "./components/DeliverableDetails";
import CreateDeliverable from "./components/CreateDeliverable";
import DeliverableAddedSubscription from "./subscriptions/DeliverableAddedSubscription";

const { Content } = Layout;

const AppQuery = graphql`
    query AppQuery($id: ID!) {
        ...DevelopmentPlan_developmentPlanningQuery
        ...DeliverableDetails_developmentPlanningQuery @arguments(id: $id)
    }
`;

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            deliverableId: null,
            showDrawer: false
        };

        this.deliverableSelected = this.deliverableSelected.bind(this);
        this.closedDrawer = this.closedDrawer.bind(this);
    }

    componentDidMount() {
        DeliverableAddedSubscription();
    }
    
    deliverableSelected(deliverableId){
        this.setState({
            deliverableId: deliverableId,
            showDrawer: true
        });
    }

    closedDrawer(){
        this.setState({
            showDrawer: false
        });
    }

    render() {
        return (
            <Layout>
                <Layout style={{padding: '24px 24px 24px'}}>
                    <Content style={{background: '#fff', padding: 24, margin: 0, minHeight: 280}}>
                        <QueryRenderer
                            environment={environment}
                            query={AppQuery}
                            variables={{id: 1}}
                            render={({error, props}) => {
                                if (error) {
                                    return <div>{error.message}</div>
                                } else if (props) {
                                    return (
                                        <div>
                                            <DeliverableDetails developmentPlanningQuery={props} closeDrawer={this.closedDrawer} deliverableId={this.state.deliverableId} showDrawer={this.state.showDrawer}/>
                                            <DevelopmentPlan developmentPlanningQuery={props} deliverableSelected={this.deliverableSelected}/>
                                            <CreateDeliverable />
                                        </div>
                                    )
                                }

                                return "Loading..."
                            }}
                        />
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

export default App;