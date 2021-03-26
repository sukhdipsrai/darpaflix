import React from "react";
import * as API from "../util/API";

class MediaTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trailerMode: false,
      superModal: false,
      listed: this.props.listed,
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
        try {
          if (video.paused) video.play();
          if (video.muted) video.muted = false;
        } catch (e) {
          this.playVideoListner();
        }
      } else this.playVideoListner();
    }, 100);
  }
  superModal() {
    document.getElementById(this.props.id).classList.remove(this.modalClass);
    this.timer = 0;
    this.mouseHover = false;
    this.setState({ trailerMode: false, superModal: true });
  }

  addToList() {
    let data = { id: this.props.userId, media_id: this.props.data.extract.id };
    API.addToList(data);
    // TODO: Add button styling to match
  }

  removeFromeList() {}

  listHandler() {}

  render() {
    this.modalClass = "modal";
    if (this.props.first) this.modalClass = "modal-first";
    else if (this.props.last) this.modalClass = "modal-last";
    // let displayContent = <img src={this.props.data.imageUrl}></img>;
    let displayContent = <img src={window.devImageUrl}></img>;
    let superModal = null;
    let buttonContent = null;
    let videoContent = null;
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
          {/* play */}
          <button className="media-button" type="button">
            &#9658;
          </button>
          {/* add to list */}
          <button
            className="media-button"
            type="button"
            onClick={() => this.addToList()}
          >
            &#43;
          </button>
          {/* show super modal */}
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
          autoPlay
          type="video/mp4"
        ></video>
      );
      videoContent = (
        <div className="super-modal-detail">
          <button
            onClick={() => {
              this.setState({ trailerMode: false, superModal: false });
              document.getElementById("super-modal-background").style.display =
                "none";
            }}
          >
            {"X"}
          </button>
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
      document.getElementById("super-modal-background").style.display = "block";
    }
    return (
      <div
        id={this.props.id}
        className="media-tile"
        onMouseEnter={() => {
          if (!this.state.superModal) {
            this.mouseHover = true;
            this.hoverTimer();
          }
        }}
        onMouseLeave={() => {
          if (!this.state.superModal) {
            document
              .getElementById(this.props.id)
              .classList.remove(this.modalClass);
            this.timer = 0;
            this.mouseHover = false;
            this.setState({ trailerMode: false });
          }
        }}
      >
        <div id="super-modal-background"></div>

        {displayContent}
        {buttonContent}
        {entireModal}
        {/* button content causes weird bulge issue */}
      </div>
    );
  }
}

export default MediaTile;
