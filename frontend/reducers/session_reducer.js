import {RECEIVE_USER, REMOVE_USER} from '../actions/actions'


const _nullSession = {
    currentUser: null
  };

export default (state = _nullSession, action)=> {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_USER:
            const currentUser = action.user
            console.log(currentUser);
            return Object.assign({}, { currentUser });
        case  REMOVE_USER:
            return _nullSession;
        default:
            return state;
    }
}