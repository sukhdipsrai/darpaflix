import React from "react";

class SocialLinks extends React.Component {
  render() {
    return (
      <div className="links">
        <a
          href="https://www.linkedin.com/in/sukhdip-rai-14766016b/"
          target="_blank"
        >
          <img
            src={window.linkedin}
            className="profile-links"
            id="linkedin"
          ></img>
        </a>
        <a href="https://github.com/sukhdipsrai" target="_blank">
          {" "}
          <img src={window.github} className="profile-links" id="github"></img>
        </a>
        <a href="https://angel.co/u/sukhdip-rai" target="_blank">
          {" "}
          <img
            src={window.angellist}
            className="profile-links"
            id="angellist"
          ></img>
        </a>
      </div>
    );
  }
}

export default SocialLinks;
