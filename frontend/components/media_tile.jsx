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
    if (this.timer >= 1800) {
      this.setState({ trailerMode: true });
    } else if (this.mouseHover)
      setTimeout(() => {
        this.timer += 200;
        this.hoverTimer();
      }, 200);
  }

  render() {
    let displayContent = <img src={this.props.data.imageUrl}></img>;
    if (this.state.trailerMode)
      displayContent = (
        <video
          id={this.props.data.extract.id}
          src={this.props.data.trailerUrl}
          type="video/mp4"
          autoPlay="autoplay"
        ></video>
      );
    return (
      <div
        className="media-tile"
        onMouseEnter={() => {
          this.mouseHover = true;
          this.hoverTimer();
        }}
        onMouseLeave={() => {
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
