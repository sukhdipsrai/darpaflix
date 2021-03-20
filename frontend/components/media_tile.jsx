import React from "react";

class MediaTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trailerMode: false,
    };
    this.timer = 0;
    this.mouseHover = false;
  }

  hoverTimer() {
    if (this.timer >= 600) {
      this.setState({ trailerMode: true });
      document.getElementById(this.props.id).classList.add("modal");
      this.playVideoListner();
    } else if (this.mouseHover)
      setTimeout(() => {
        this.timer += 200;
        this.hoverTimer();
      }, 200);
  }

  playVideoListner() {
    setTimeout(() => {
      let video = document
        .getElementById(this.props.id)
        .getElementsByTagName("video")[0];
      debugger;
      if (video !== null) {
        if (video.paused) video.play();
        if (video.muted) video.muted = false;
      } else this.playVideoListner();
    }, 100);
  }

  render() {
    let displayContent = <img src={this.props.data.imageUrl}></img>;
    if (this.state.trailerMode)
      displayContent = (
        <video src={this.props.data.trailerUrl} muted type="video/mp4"></video>
      );
    return (
      <div
        id={this.props.id}
        className="media-tile"
        onMouseEnter={() => {
          this.mouseHover = true;
          this.hoverTimer();
        }}
        onMouseLeave={() => {
          document.getElementById(this.props.id).classList.remove("modal");
          this.timer = 0;
          this.mouseHover = false;
          this.setState({ trailerMode: false });
        }}
      >
        {displayContent}
      </div>
    );
  }
}

export default MediaTile;
