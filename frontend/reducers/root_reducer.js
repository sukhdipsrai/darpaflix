import { combineReducers } from 'redux';
import SessionReducer from './session_reducer'


const RootReducer = combineReducers({user:SessionReducer})

export default RootReducer;