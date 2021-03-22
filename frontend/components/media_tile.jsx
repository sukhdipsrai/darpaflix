import React from "react";

class MediaTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trailerMode: false,
      superModal: false,
    };
    this.timer = 0;
    this.mouseHover = false;
  }

  hoverTimer() {
    if (this.timer >= 600) {
      document.getElementById(this.props.id).classList.add(this.modalClass);
      this.setState({ trailerMode: true, superModal: false });
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
  superModal() {
    document.getElementById(this.props.id).classList.remove(this.modalClass);
    this.timer = 0;
    this.mouseHover = false;
    this.setState({ trailerMode: false, superModal: true });
  }
  render() {
    this.modalClass = "modal";
    if (this.props.first) this.modalClass = "modal-first";
    else if (this.props.last) this.modalClass = "modal-last";
    // let displayContent = <img src={this.props.data.imageUrl}></img>;
    let displayContent = <img src={window.devImageUrl}></img>;
    let superModal = null;
    let buttonContent = null;
    let videoContent = null;
    let modalBack = null;
    let entireModal = null;
    if (this.state.trailerMode) {
      displayContent = (
        <video
          className="media-video"
          // src={this.props.data.trailerUrl}
          src={window.devVideoUrl}
          muted
          type="video/mp4"
        ></video>
      );
      buttonContent = (
        <div className="media-tile-button-container">
          <button className="media-button" type="button">
            &#9658;
          </button>
          <button className="media-button" type="button">
            &#43;
          </button>
          <button
            className="media-button"
            onClick={() => {
              this.superModal();
            }}
          >
            ^
          </button>
        </div>
      );
    }
    if (this.state.superModal) {
      superModal = (
        <video
          className="super-media-video"
          // src={this.props.data.trailerUrl}
          src={window.devVideoUrl}
          muted
          type="video/mp4"
        ></video>
      );
      videoContent = (
        <div className="super-modal-detail">
          <p>{this.props.data.extract.title}</p>
          <p>{this.props.data.extract.director}</p>
          <p>{this.props.data.extract.cast}</p>
          <p>{this.props.data.extract.summary}</p>
          <p>{this.props.data.extract.year}</p>
        </div>
      );
      entireModal = (
        <div className="super-modal">
          {superModal}
          {videoContent}
        </div>
      );
      modalBack = <div className="super-modal-background"></div>;
    }
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
        {buttonContent}
        {entireModal}
        {modalBack}
        {/* button content causes weird bulge issue */}
      </div>
    );
  }
}

export default MediaTile;
