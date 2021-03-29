import * as API from "../util/API";

export const UPDATE_QUERY = "UPDATE_QUERY";

const query = (query) => ({
  type: UPDATE_QUERY,
  query: query,
});

export const updateQuery = (data) => (dispatch) => {
  return API.getSearch(data).then((success) => dispatch(query(success)));
};
