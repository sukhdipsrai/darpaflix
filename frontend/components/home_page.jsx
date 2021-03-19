import React from "react";
import NavBarContainer from "./videos/nav_bar_container";
import MediaTile from "./media_tile";
import * as API from "../util/API";
class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: null,
    };
  }
  componentWillMount() {
    this.state.test = API.testFetchPhoto().then((success) => {
      this.setState({ test: success[0] });
      console.log(success);
    });
  }

  render() {
    const { id, email } = this.props.user;
    const elements = new Array(1).fill(0);
    let homepageContent = elements.map((ele, index) => {
      return <MediaTile key={index}></MediaTile>;
    });

    return (
      <div className="home-page">
        <NavBarContainer />
        <div className="media-tile-container">
          {homepageContent}
        <img src={this.state.test.imageUrl}></img>
          <video width="320" height="240" controls={true} autoPlay={true}>
            <source src={this.state.test.mediaUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    );
  }
}

export default HomePage;
