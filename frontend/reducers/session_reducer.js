import {RECEIVE_USER, REMOVE_USER} from '../actions/actions'

const SessionReducer = (state = {}, action)=> {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_USER:
            return action.user;
        case  REMOVE_USER:
            return {};
        default:
            return state;
    }
}

export default SessionReducer;
