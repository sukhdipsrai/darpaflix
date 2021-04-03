import * as API from "../util/API";

export const RECEIVE_USER_LIST = "RECEIVE_USER_LIST";
const getList = (list) => ({
  type: RECEIVE_USER_LIST,
  list: list,
});

export const getUserList = (id) => (dispatch) => {
  return API.getList(id).then((data) => dispatch(getList(data)));
};

export const removeUserList = (data) => (dispatch) => {
  return API.removeFromList(data).then((success) => {
    dispatch(getUserList(success));
  });
};

export const addUserList = (data) => (dispatch) => {
  return API.addToList(data).then((success) => {
    dispatch(getUserList(data.id));
  });
};
