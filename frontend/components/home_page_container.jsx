import { connect } from "react-redux";
import HomePage from "./home_page";
import * as ListAction from "../actions/user_list";

const mstp = (state, ownProps) => {
  return {
    user: state.session.currentUser,
    list: state.list,
  };
};

const mdtp = (dispatch) => {
  return {
    getUserList: (id) => dispatch(ListAction.getUserList(id)),
  };
};

export default connect(mstp, mdtp)(HomePage);
