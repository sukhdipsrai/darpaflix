import React from "react";
import { connect } from "react-redux";
import NavBarContainer from "./videos/nav_bar_container";
import MediaTile from "./media_tile";
import * as ListAction from "../actions/user_list";
import * as API from "../util/API";
class SearchPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: null,
    };
  }
  componentDidMount() {
    this.props.getUserList(this.props.user.id).then((success) => {
      this.setState({ list: success.list });
      console.log(success.list);
    });
  }

  render() {
    let listIdMap = {};
    try {
      this.state.list.forEach((ele) => {
        listIdMap[ele.extract.id] = true;
      });
    } catch (e) {
      // console.log(e);
    }
    let errorMsg = null;
    let searchContent = null;
    try {
      const elements = this.props.queryData;
      let homepageContent = null;
      if (this.props.queryData !== null) {
        searchContent = elements.map((ele, index) => {
          let first = false;
          let last = false;
          let listed = false;
          if (ele.extract.id in listIdMap) listed = true;
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
              listed={listed}
            ></MediaTile>
          );
        });
      }
    } catch (error) {
      errorMsg = "There are no Results that match your Search.";
      // console.log(error);
    }

    return <div className="media-tile-container">{searchContent}</div>;
  }
}

const mstp = (state, ownProps) => {
  return {
    user: state.session.currentUser,
    list: state.list,
    queryData: state.query,
  };
};

const mdtp = (dispatch) => {
  return {
    getUserList: (id) => dispatch(ListAction.getUserList(id)),
  };
};

export default connect(mstp, mdtp)(SearchPage);
