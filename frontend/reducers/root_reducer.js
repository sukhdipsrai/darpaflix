import { combineReducers } from "redux";
import SessionReducer from "./session_reducer";
import ErrorReducer from "./errors_reducer";
import ListReducer from "./list_reducer";
export default combineReducers({
  session: SessionReducer,
  errors: ErrorReducer,
  list: ListReducer,
});
