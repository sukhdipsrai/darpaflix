import React from "react";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { id, email } = this.props.user;
    return (
      <div className="navbar">
        <Link to="/browse">
          {" "}
          <img src={window.logoUrl} />
        </Link>
        <Link className="navbar-links" to="/browse">
          {" "}
          Home{" "}
        </Link>
        <Link className="navbar-links" to="/myList">
          {" "}
          My List{" "}
        </Link>
        <button className="navbar-links"> Search </button>
        <button
          className="navbar-links"
          onClick={() => this.props.signOutUser(id)}
        >
          Logout
        </button>
      </div>
    );
  }
}

export default NavBar;
