import React from "react";
import { Link, withRouter } from "react-router-dom";
import HomePageContainer from "../home_page_container";
import MyListPage from "../mylist_page";
import SearchPage from "../search_page";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
    };
  }

  handleSearchIcon() {
    document.getElementById("search-bar").classList.toggle("hidden");
  }

  handleSearch(e) {
    // console.log(e.target.value);
    if (e.key === "Enter") {
      this.setState({ query: e.target.value });
      console.log(this.state.query);
    }
  }

  render() {
    const { id, email } = this.props.user;

    let navbarcontent = (
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
              onKeyUp={(e) => {
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
        {displayContent}
      </div>
    );
    debugger;
    let displayContent = null;
    let path = this.props.location.pathname;

    if (this.state.query !== "")
      displayContent = (
        <div className="search-page">
          {navbarcontent}
          <SearchPage query={this.state.query} />
        </div>
      );
    else {
      if (path === "/browse")
        displayContent = (
          <div className="home-page">
            {navbarcontent}
            <HomePageContainer />
          </div>
        );
      else if (path === "/myList")
        displayContent = (
          <div className="mylist-page">
            {navbarcontent}
            <MyListPage />
          </div>
        );
    }

    return displayContent;
  }
}

export default withRouter(NavBar);
