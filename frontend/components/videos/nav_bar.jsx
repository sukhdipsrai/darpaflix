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
        <Link to="/browse"> Home </Link>
        <Link to="myList"> MyList </Link>
        <button> Search </button>
        <button onClick={() => this.props.signOutUser(id)}>Logout</button>
      </div>
    );
  }
}

export default NavBar;
