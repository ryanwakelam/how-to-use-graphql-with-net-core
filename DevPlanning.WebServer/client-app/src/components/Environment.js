const {
    Environment,
    Network,
    RecordSource,
    Store
} = require('relay-runtime');

const store = new Store(new RecordSource());

const fetchQuery = (operation, variables) => {
    return fetch('/graphql', {
        method: 'POST',
        headers: {
            'content-type':'application/json'
        },
        body: JSON.stringify({
            query: operation.text,
            variables
        })
    }).then(response => {
        return response.json()
    })};

const network = Network.create(fetchQuery);

const environment = new Environment({
    network,
    store
});

export default environment;