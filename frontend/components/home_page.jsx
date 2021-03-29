import React from "react";
import NavBarContainer from "./videos/nav_bar_container";
import MediaTile from "./media_tile";
import * as API from "../util/API";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mediaData: null,
      list: null,
    };
  }

  componentDidMount() {
    this.props.getUserList(this.props.user.id).then((success) => {
      this.setState({ list: success.list });
      console.log(success.list);
    });
    API.testFetchPhoto().then((success) => {
      this.setState({ mediaData: success });
      console.log(success);
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
    // const { id, email } = this.props.user;
    const elements = this.state.mediaData;
    let homepageContent = null;
    if (this.state.mediaData !== null) {
      homepageContent = elements.map((ele, index) => {
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

    return <div className="media-tile-container">{homepageContent}</div>;
  }
}

export default HomePage;
