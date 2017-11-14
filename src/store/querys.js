
const api = {
    query: '/'
}

const actions = {
    FETCH_SUCCESS: 'query/FETCH_SUCCESS'
};

export const actionsCreators = {
    query: (query) => (dispatch, getState) => {
        const url = getState().server + api.query;
        fetch(url, {
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                query: query
            })
        })
            .then((result) => result.json())
            .then((result) => {
                console.log(result)
            })
            .catch(() => {

            })
    }
}

export default (state = {}, action) => {
    switch (action.type) {
        case actions.FETCH_SUCCESS:
            return state;
        default:
            return state;
    }
}