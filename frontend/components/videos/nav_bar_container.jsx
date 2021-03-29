import { connect } from "react-redux";
import NavBar from "./nav_bar";
import { signOutUser } from "../../actions/actions";
import * as QueryAction from "../../actions/search";
import { Link, withRouter } from "react-router-dom";

const mstp = (state, ownProps) => {
  return {
    user: state.session.currentUser,
  };
};

const mdtp = (dispatch) => {
  return {
    signOutUser: (id) => dispatch(signOutUser(id)),
    updateQuery: (data) => dispatch(QueryAction.updateQuery(data)),
  };
};

export default withRouter(connect(mstp, mdtp)(NavBar));
