import React from "react";
import { connect } from "react-redux";
import NavBarContainer from "./videos/nav_bar_container";
import MediaTile from "./media_tile";
import * as ListAction from "../actions/user_list";

class MyListPage extends React.Component {
  constructor(props) {
    super(props);
    // this.props.getUserList(this.props.user.id);
  }

  componentWillMount() {
    this.props.getUserList(this.props.user.id);
  }

  render() {
    let myListContent = null;
    try {
      myListContent = this.props.list.map((ele, index) => {
        let first = false;
        let last = false;
        if ((index + 1) % 5 === 0) last = true;
        if (index % 5 === 0) first = true;
        return (
          <MediaTile
            key={index}
            data={ele}
            id={index}
            first={first}
            last={last}
            userId={this.props.user.id}
            listed={true}
            getUserList={() => this.props.getUserList()}
          ></MediaTile>
        );
      });
    } catch (e) {}

    return (
      <div className="mylist-page">
        <NavBarContainer />
        <div className="media-tile-container">{myListContent}</div>
      </div>
    );
  }
}

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

export default connect(mstp, mdtp)(MyListPage);
