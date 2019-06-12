import {requestSubscription} from "react-relay";
import environment from '../components/Environment'
import graphql from 'babel-plugin-relay/macro';

const deliverableAddedSubscription = graphql`
    subscription DeliverableAddedSubscription{
        deliverableAdded {
            id
            name
            pbi
            status
        }
    }
`;

export default () => {
    const subscriptionConfig = {
        subscription: deliverableAddedSubscription,
        variables: {},
        updater: store => {
            const newDeliverable = store.getRootField('deliverableAdded');
            const root = store.getRoot();
            const deliverables = root.getLinkedRecords('deliverables') || [];
            const newDeliverables = [...deliverables, newDeliverable];
            root.setLinkedRecords(newDeliverables, 'deliverables');
        },
        onError: error => console.log(`An error occured:`, error),
    };

    requestSubscription(
        environment,
        subscriptionConfig
    )
}