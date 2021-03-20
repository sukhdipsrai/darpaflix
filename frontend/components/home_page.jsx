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
        return <MediaTile key={index} data={ele} id={1}></MediaTile>;
      });
    }
    let homepageContent2 = null;
    if (this.state.mediaData !== null) {
      homepageContent2 = elements.map((ele, index) => {
        return <MediaTile key={index} data={ele} id={2}></MediaTile>;
      });
    }

    let homepageContent3 = null;
    if (this.state.mediaData !== null) {
      homepageContent3 = elements.map((ele, index) => {
        return <MediaTile key={index} data={ele} id={3}></MediaTile>;
      });
    }

    return (
      <div className="home-page">
        <NavBarContainer />
        <div className="media-tile-container">
          {homepageContent} {homepageContent2} {homepageContent3}
        </div>
      </div>
    );
  }
}

export default HomePage;
