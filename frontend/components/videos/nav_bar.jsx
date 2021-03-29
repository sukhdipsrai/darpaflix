import React from "react";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSearchIcon() {
    document.getElementById("search-bar").classList.toggle("hidden");
  }

  handleSearch(e) {
    console.log(e.target.value);
  }

  render() {
    const { id, email } = this.props.user;
    return (
      <div className="navbar">
        <div className="left-nav">
          <Link to="/browse">
            {" "}
            <img src={window.logoUrl} />
          </Link>
          <Link className="navbar-links" to="/browse">
            {" "}
            Home{" "}
          </Link>{" "}
          <Link className="navbar-links" to="/myList">
            {" "}
            My List{" "}
          </Link>
        </div>

        <div className="right-nav">
          <div className="navbar-links search">
            <input
              id="search-bar"
              type="text"
              placeholder="Genres"
              onChange={(e) => {
                this.handleSearch(e);
              }}
            />
            <img
              className="search-icon"
              src="https://static.vecteezy.com/system/resources/previews/000/442/657/non_2x/vector-search-icon.jpg"
              alt=""
              onClick={() => {
                this.handleSearchIcon();
              }}
            />
          </div>
          <button
            className="navbar-links"
            onClick={() => this.props.signOutUser(id)}
          >
            Logout
          </button>
        </div>
      </div>
    );
  }
}

export default NavBar;
