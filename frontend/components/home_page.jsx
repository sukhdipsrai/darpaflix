import React from "react";
import NavBarContainer from "./videos/nav_bar_container";
import MediaTile from "./media_tile";
import * as API from "../util/API";
class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mediaData: null,
    };
  }
  componentWillMount() {
    this.state.test = API.testFetchPhoto().then((success) => {
      this.setState({ mediaData: success });
      console.log(success);
    });
  }

  render() {
    const { id, email } = this.props.user;
    const elements = this.state.mediaData;
    let homepageContent = null;
    if (this.state.mediaData !== null) {
      homepageContent = elements.map((ele, index) => {
        return <MediaTile key={index} data={ele}></MediaTile>;
      });
    }

    return (
      <div className="home-page">
        <NavBarContainer />
        <div className="media-tile-container">{homepageContent}</div>
      </div>
    );
  }
}

export default HomePage;
