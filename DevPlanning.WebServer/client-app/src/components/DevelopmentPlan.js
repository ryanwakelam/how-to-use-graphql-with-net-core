import React, { Component } from 'react';
import { Table } from 'antd';
import {createFragmentContainer} from 'react-relay'
import graphql from 'babel-plugin-relay/macro';

const columns = [
    {
        title: 'Deliverable',
        dataIndex: 'name',
        key: 'name',
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

class DevelopmentPlan extends Component {

    render() {
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