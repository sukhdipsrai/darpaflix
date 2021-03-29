import React from "react";
// import * as API from "../util/API";
import { connect } from "react-redux";
import * as ListAction from "../actions/user_list";

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
    let listButton = "+";
    if (this.state.listed) listButton = "-";
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
          onClick={() => this.listHandler()}
        >
          {listButton}
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
    if (this.state.trailerMode) {
      displayContent = (
        <div>
          <video
            className="media-video"
            // src={this.props.data.trailerUrl}
            src={window.devVideoUrl}
            autoPlay
            type="video/mp4"
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
          type="video/mp4"
        ></video>
      );
      videoContent = (
        <div className="super-modal-detail">
          {/* play */}
          <button className="media-button" type="button">
            &#9658;
          </button>
          {/* add to list */}
          <button
            className="media-button"
            type="button"
            onClick={() => this.listHandler()}
          >
            {listButton}
          </button>
          <p>{this.props.data.extract.title}</p>
          <p>{this.props.data.extract.director}</p>
          <p>{this.props.data.extract.cast}</p>
          <p>{this.props.data.extract.summary}</p>
          <p>{this.props.data.extract.year}</p>
          <p>{this.props.data.extract.genres.map((g) => g.name + ", ")}</p>
        </div>
      );
      entireModal = (
        <div className="super-modal">
          <button
            className="media-button super-modal-button"
            onClick={() => {
              this.setState({ trailerMode: false, superModal: false });
              document.getElementById(this.props.id).children[0].style.display =
                "none";
              //   document.getElementById(this.props.id).style.display = "none";
            }}
          >
            {"X"}
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
  return {};
};

const mdtp = (dispatch) => {
  return {
    removeUserListState: (data) => dispatch(ListAction.removeUserList(data)),
    addUserListState: (data) => dispatch(ListAction.addUserList(data)),
  };
};

export default connect(mstp, mdtp)(MediaTile);
