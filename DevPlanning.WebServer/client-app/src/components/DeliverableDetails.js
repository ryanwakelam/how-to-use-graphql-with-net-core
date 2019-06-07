import React, { Component } from 'react';
import { Drawer, Descriptions} from 'antd';

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
            <Descriptions title="Stub Title" bordered>
        <Descriptions.Item label="PBI">Stub PBI</Descriptions.Item>
        <Descriptions.Item label="Status" span={2}>Stub status</Descriptions.Item>
        <Descriptions.Item label="Description">Stub description</Descriptions.Item>
        </Descriptions>
        </Drawer>
    )
    }
}

export default DeliverableDetails