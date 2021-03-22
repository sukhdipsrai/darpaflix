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
      document.getElementById(this.props.id).classList.add(this.modalClass);
      this.setState({ trailerMode: true });
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
      if (video !== null) {
        if (video.paused) video.play();
        if (video.muted) video.muted = false;
      } else this.playVideoListner();
    }, 100);
  }

  render() {
    this.modalClass = "modal";
    if (this.props.first) this.modalClass = "modal-first";
    else if (this.props.last) this.modalClass = "modal-last";
    // let displayContent = <img src={this.props.data.imageUrl}></img>;
    let displayContent = <img src={window.devImageUrl}></img>;
    if (this.state.trailerMode)
      displayContent = (
        <div>
          <video
            className="media-video"
            // src={this.props.data.trailerUrl}
            src={window.devVideoUrl}
            muted
            type="video/mp4"
          ></video>
          <div className="media-tile-button-container">
            <button className="media-button" type="button">
              &#9658;
            </button>
            <button className="media-button" type="button">
              &#43;
            </button>
          </div>
        </div>
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
          document
            .getElementById(this.props.id)
            .classList.remove(this.modalClass);
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
