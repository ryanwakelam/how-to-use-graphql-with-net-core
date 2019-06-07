import React, { Component } from 'react';
import { Table } from 'antd';
import {createFragmentContainer} from 'react-relay'
import graphql from 'babel-plugin-relay/macro';

class DevelopmentPlan extends Component {

    constructor(props){
        super(props);
        this.handleDeliverableClicked = this.handleDeliverableClicked.bind(this);
    }

    handleDeliverableClicked(deliverable){
        this.props.deliverableSelected(deliverable.id);
    }

    render() {

        const columns = [
            {
                title: 'Deliverable',
                dataIndex: 'name',
                key: 'name',
                onCell: deliverable => {return {onClick: () => this.handleDeliverableClicked(deliverable)}}

            },
            {
                title: 'PBI',
                dataIndex: 'pbi',
                key: 'pbi',
            },
            {
                title: 'Status',
                dataIndex: 'status',
                key: 'status',
            },
        ];

        return <Table columns={columns} rowKey='id' dataSource={this.props.developmentPlanningQuery.deliverables} size={'small'} pagination={false} title={()=>'Technical Forecasting 2019'} bordered />
    }
}

export default createFragmentContainer(DevelopmentPlan, graphql`
    fragment DevelopmentPlan_developmentPlanningQuery on DevelopmentPlanningQuery {
        deliverables {
            id
            name
            pbi
            status
        }
    }
`)