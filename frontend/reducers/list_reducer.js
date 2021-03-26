import { RECEIVE_USER_LIST } from "../actions/user_list";

export default (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_USER_LIST:
      return action.list;
    default:
      return state;
  }
};
