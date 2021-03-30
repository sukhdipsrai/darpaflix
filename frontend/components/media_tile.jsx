import React from "react";
// import * as API from "../util/API";
import { connect } from "react-redux";
import * as ListAction from "../actions/user_list";
import * as Actions from "../actions/actions";

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
      try {
        document.getElementById(this.props.id).classList.add(this.modalClass);
        this.setState({ trailerMode: true, superModal: false });
      } catch (error) {}
      document.getElementById(this.props.id).classList.add(this.modalClass);
      this.setState({ trailerMode: true, superModal: false });
      //   this.playVideoListner();
      // TODO: Force User interaction after homepage launch
    } else if (this.mouseHover)
      setTimeout(() => {
        this.timer += 200;
        this.hoverTimer();
      }, 200);
  }

  playVideoListner() {
    try {
      setTimeout(() => {
        let video = document
          .getElementById(this.props.id)
          .getElementsByTagName("video")[0];
        if (video !== null) {
          if (video.paused) video.play();
          if (video.muted) video.muted = false;
        } else this.playVideoListner();
      }, 100);
    } catch (e) {
      this.playVideoListner();
    }
  }
  superModal() {
    document.getElementById(this.props.id).classList.remove(this.modalClass);
    this.timer = 0;
    this.mouseHover = false;
    this.setState({ trailerMode: false, superModal: true });
  }

  addToList() {
    let data = { id: this.props.userId, media_id: this.props.data.extract.id };
    this.setState({ listed: true });
    // API.addToList(data);
    this.props.addUserListState(data);
  }

  removeFromList() {
    let data = { id: this.props.userId, media_id: this.props.data.extract.id };
    this.setState({ listed: false });
    this.props.removeUserListState(data);
    // this.props.getUserList(this.props.userId);
  }

  listHandler() {
    if (!this.state.listed) this.addToList();
    else this.removeFromList();
  }

  muteHandler() {
    let video = document
      .getElementById(this.props.id)
      .getElementsByTagName("video")[0];
    video.muted = !video.muted;
    this.props.toggleGlobalMute();
  }
  fullScreen() {
    let video = document
      .getElementById(this.props.id)
      .getElementsByTagName("video")[0];
    // video.requestFullscreen();
    video.controls = true;
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
    let entireModal = null;
    let listButton = window.plus;
    let volumeButton = window.volume;
    if (this.props.muted) volumeButton = window.mute;

    if (this.state.listed) listButton = window.checked;
    buttonContent = (
      <div className="media-tile-button-container">
        {/* play */}
        <button
          className="media-image-button"
          type="button"
          onClick={() => this.fullScreen()}
        >
          <img src={window.play} alt="" />{" "}
        </button>
        {/* add to list */}
        <button
          className="media-image-button"
          type="image"
          onClick={() => this.listHandler()}
        >
          <img src={listButton} alt="" />
        </button>
        {/* show super modal */}
        <button
          className="media-image-button chevron"
          onClick={() => {
            this.superModal();
          }}
        >
          <img src={window.chevron} alt="" />
        </button>
        <button
          className="media-image-button volume"
          type="button"
          onClick={() => {
            this.muteHandler();
          }}
        >
          <img src={volumeButton} alt="" />
        </button>
      </div>
    );
    if (this.state.trailerMode) {
      displayContent = (
        <div>
          <video
            className="media-video"
            // src={this.props.data.trailerUrl}
            src={window.devVideoUrl}
            autoPlay
            type="video/mp4"
            muted={this.props.muted}
          ></video>
          {buttonContent}
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
          muted={this.props.muted}
          type="video/mp4"
        ></video>
      );
      const {
        title,
        year,
        summary,
        cast,
        director,
        duration,
        genres,
      } = this.props.data.extract;
      videoContent = (
        <div className="super-modal-detail">
          {/* play */}
          <button
            className="media-image-button modal"
            type="button"
            onClick={() => this.fullScreen()}
          >
            <img src={window.play} alt="" />{" "}
          </button>
          {/* add to list */}
          <button
            className="media-image-button modal"
            type="image"
            onClick={() => this.listHandler()}
          >
            <img src={listButton} alt="" />
          </button>
          <button
            className="media-image-button volume modal"
            type="button"
            onClick={() => {
              this.muteHandler();
            }}
          >
            <img src={volumeButton} alt="" />
          </button>
          <div className="details-container">
            <div className="details-left">
              <p>
                {title +
                  " (" +
                  year +
                  ") " +
                  `${Math.floor(duration % 10)}h ${Math.floor(
                    (duration % 1) * 10
                  )}m`}{" "}
              </p>
              <p>{summary}</p>
              <p></p>
            </div>

            <div className="details-right">
              <p>{"Cast: " + cast}</p>

              <p>{"Director: " + director}</p>
              <p>{"Genres: " + genres.map((g) => g.name).join(" , ")}</p>
            </div>
          </div>
        </div>
      );
      entireModal = (
        <div className="super-modal">
          <button
            className="media-image-button super-modal-button"
            onClick={() => {
              this.setState({ trailerMode: false, superModal: false });
              document.getElementById(this.props.id).children[0].style.display =
                "none";
              //   document.getElementById(this.props.id).style.display = "none";
            }}
          >
            <img src={window.cancel} alt="" />
          </button>
          {superModal}
          {videoContent}
        </div>
      );
      document.getElementById(this.props.id).children[0].style.display =
        "block";
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
        {entireModal}
        {/* button content causes weird bulge issue */}
      </div>
    );
  }
}

const mstp = (state, ownProps) => {
  return {
    muted: !state.audio,
  };
};

const mdtp = (dispatch) => {
  return {
    removeUserListState: (data) => dispatch(ListAction.removeUserList(data)),
    addUserListState: (data) => dispatch(ListAction.addUserList(data)),
    toggleGlobalMute: () => dispatch(Actions.toggleGlobalMute()),
  };
};

export default connect(mstp, mdtp)(MediaTile);
