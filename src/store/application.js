
const api = {

}

const actions = {
    VALIDATE_SERVER_SUCCESS: 'query/FETCH_SUCCESS'
};

export const actionsCreators = {
    validateServerSuccess: (server) => ({
        type: actions.VALIDATE_SERVER_SUCCESS,
        server: server
    }),
    validateServer: (server) => (dispatch, getState) => {
        return new Promise((resolve, reject) => {
            fetch(server, {
                method: 'GET',
            })
                .then((result) => result.json())
                .then((result) => {
                    if (/^TiDB.*/.test(result.server || '')) {
                        dispatch(actionsCreators.validateServerSuccess(server));
                        resolve();
                    }
                    throw new Error("Server not found");
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }
}

const defaultState = {
    connected: '',
    server: 'http://' + window.location.hostname + ':5000'
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case actions.VALIDATE_SERVER_SUCCESS:
            return {...state, connected: action.server};
        default:
            return state;
    }
}