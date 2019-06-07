import React, { Component } from 'react';
import {Input} from 'antd';

class CreateDeliverable extends Component {

    constructor(props){
        super(props);
        this.state = {name:""};
        this.updateInputValue = this.updateInputValue.bind(this);
        this.createDeliverable = this.createDeliverable.bind(this);
    }

    createDeliverable(){
        const name = this.state.name != null ? this.state.name.trim() : this.state.name;
        this.setState({name: ""});

        if(!name || name === "")
            return;

        const variables = {
            deliverable: {
                name: name
            }
        };
    }

    updateInputValue(evt){
        this.setState({name: evt.target.value});
    }

    render() {
        return (
            <div>
                <Input placeholder="Create a deliverable" value={this.state.name} onChange={this.updateInputValue} onPressEnter={this.createDeliverable} />
            </div>
        )
    }
}

export default CreateDeliverable