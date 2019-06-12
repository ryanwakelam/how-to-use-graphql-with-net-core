import React, { Component } from 'react';
import {Input} from 'antd';
import {commitMutation} from 'react-relay'
import graphql from 'babel-plugin-relay/macro';
import environment from "./Environment";

const createDeliverableMutation = graphql`
    mutation CreateDeliverableMutation($deliverable: DeliverableInput!){
        createDeliverable(deliverable: $deliverable){
            id
            name
        }
    }
`;

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

        commitMutation(
            environment,
            {
                mutation: createDeliverableMutation,
                variables: variables,
                updater: store =>{
                    const newDeliverable = store.getRootField('createDeliverable');
                    const root = store.getRoot();
                    const deliverables = root.getLinkedRecords('deliverables') || [];
                    const newDeliverables = [...deliverables, newDeliverable];
                    root.setLinkedRecords(newDeliverables, 'deliverables');
                },
                onCompleted: (response, errors) => {},
                onError: err => console.error(err),
            },
        );
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