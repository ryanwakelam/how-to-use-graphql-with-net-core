import React, { Component } from 'react';
import { Drawer, Descriptions} from 'antd';
import {createRefetchContainer} from 'react-relay'
import graphql from 'babel-plugin-relay/macro';

class DeliverableDetails extends Component {

    constructor(props){
        super(props);
        this.state = {visible: props.showDrawer};
    }

    componentWillReceiveProps(nextProps, nextContext) {
        this.setState({
            deliverableId: nextProps.deliverableId,
            visible: nextProps.showDrawer
        });
    }
    
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.deliverableId !== this.state.deliverableId)
            this._refetch();
    }
    
    render(){
        return (
            <Drawer
        title="Deliverable"
        width={640}
        placement="right"
        closable={true}
        onClose={this.props.closeDrawer}
        visible={this.state.visible}
            >
            <Descriptions title={this.props.developmentPlanningQuery.deliverable.name} bordered>
                <Descriptions.Item label="PBI">{this.props.developmentPlanningQuery.deliverable.pbi}</Descriptions.Item>
                <Descriptions.Item label="Status" span={2}>{this.props.developmentPlanningQuery.deliverable.status}</Descriptions.Item>
                <Descriptions.Item label="Description">{this.props.developmentPlanningQuery.deliverable.description}</Descriptions.Item>
            </Descriptions>
        </Drawer>
    )
    }
    
    _refetch = () => {
        if(this.state.deliverableId)
            this.props.relay.refetch(
                {id: this.state.deliverableId},
                null,
                {force: true},
            );
    }
}

export default createRefetchContainer(DeliverableDetails, graphql`
    fragment DeliverableDetails_developmentPlanningQuery on DevelopmentPlanningQuery @argumentDefinitions(id: {type: "ID"}){
        deliverable(id: $id){
            id
            name
            pbi
            status
            description
        }
    }
`, graphql`
    query DeliverableDetailsRefetchQuery($id: ID!){
        ...DeliverableDetails_developmentPlanningQuery @arguments(id: $id)
    }`)