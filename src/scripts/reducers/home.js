import {
    TOGGLE_HOME_FETCHING,
    SET_DATA,
    SET_SERVER_ERROR
} from '../actions/pages/home/home';

const home = (
    state = {
        isFetching: false,
        serverError: false,
        data: null
    },
    action
) => {
    switch (action.type) {
        case SET_DATA:
            return Object.assign({}, state, {
                data: action.data
            });
        case SET_SERVER_ERROR:
            return Object.assign({}, state, {
                serverError: action.serverError
            });
        case TOGGLE_HOME_FETCHING:
            return Object.assign({}, state, {
                isFetching: action.isFetching
            });
        default:
            return state;
    }
};

export default home;
