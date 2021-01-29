import { FAILED_AUTH, RECEIVE_USER, FAILED_ACCOUNT_CREATION, CLEAR_ACCOUNT_CREATION, CLEAR_AUTH } from '../actions/actions';
import * as api from '../util/validator'

export default (state = {}, action) => {
    Object.freeze(state);
    let login = null;
    let signup = null;
    switch (action.type) {
        case CLEAR_AUTH:
            return Object.assign({}, { signup });
        case CLEAR_ACCOUNT_CREATION:
            return Object.assign({}, { login });
        case RECEIVE_USER:
            return Object.assign({}, { login });
        case FAILED_AUTH:
            login = api.prettify(action.error)
            return Object.assign({}, { login });
        case FAILED_ACCOUNT_CREATION:
            signup = api.prettify(action.error);
            return Object.assign({}, { signup });
        default:
            return state;
    }
}