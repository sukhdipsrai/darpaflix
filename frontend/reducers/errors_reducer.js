import {FAILED_AUTH, RECEIVE_USER, FAILED_ACCOUNT_CREATION} from '../actions/actions';


export default (state = {}, action)=> {
    Object.freeze(state);
    let login = null;
    switch (action.type) {
        case FAILED_AUTH:
            login = action.error
            return Object.assign({}, { login });
        case FAILED_ACCOUNT_CREATION:
            const signup = action.error
            return Object.assign({}, { signup });
        case RECEIVE_USER:
            login = null;
            return Object.assign({}, { login });
        default:
            return state;
    }
}