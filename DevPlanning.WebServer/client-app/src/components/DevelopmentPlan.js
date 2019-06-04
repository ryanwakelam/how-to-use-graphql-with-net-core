import React, { Component } from 'react';
import { Table } from 'antd';

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

const data = [
    {
        name:"Daily data enhancements",
        pbi:"VN-2739",
        status:"Local"
    },
    {
        name:"US Reporting",
        pbi:"VN-2844",
        status:"Local"
    },
    {
        name:"Misc Bugs/Regression",
        pbi:"",
        key:"Local"
    },
];

class DevelopmentPlan extends Component {

    render() {
        return <Table columns={columns} rowKey="id" dataSource={data} size={"small"} pagination={false}/>
    }
}

export default DevelopmentPlan