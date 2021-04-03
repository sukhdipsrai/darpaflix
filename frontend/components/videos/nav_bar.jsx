import React from "react";
import { Link, withRouter } from "react-router-dom";
import HomePageContainer from "../home_page_container";
import MyListPage from "../mylist_page";
import SearchPage from "../search_page";
import SocialLinks from "../social_links";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
    };
  }

  focusSearchIcon() {
    let searchBar = document.getElementById("search-bar");
    searchBar.classList.add("hidden");
    searchBar.focus();
  }
  blurSearchIcon() {
    let searchBar = document.getElementById("search-bar");
    searchBar.classList.remove("hidden");
  }

  handleSearch(e) {
    // console.log(e.target.value);
    if (e.key === "Enter") {
      this.setState({ query: e.target.value });
      if (e.target.value.length > 0) this.props.updateQuery(e.target.value);
      // console.log(e.target.value);
    }
  }

  makeSearch(inputString) {
    this.setState({ query: inputString });
    this.props.updateQuery(inputString);
  }
  resetQuery() {
    this.setState({ query: "" });
  }

  render() {
    const { id, email } = this.props.user;

    let navbarcontent = (
      <div className="navbar">
        <div className="left-nav">
          <Link to="/browse">
            {" "}
            <img
              id="navbar-logo"
              src={window.logoUrl}
              onClick={() => this.resetQuery()}
            />
          </Link>
          <Link
            className="navbar-links"
            to="/browse"
            onClick={() => this.resetQuery()}
          >
            {" "}
            Home{" "}
          </Link>{" "}
          <Link
            className="navbar-links"
            to="/myList"
            onClick={() => this.resetQuery()}
          >
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
              autoComplete="off"
              onKeyUp={(e) => {
                this.handleSearch(e);
              }}
              onBlur={() => this.blurSearchIcon()}
            />
            <img
              className="search-icon"
              src="https://static.vecteezy.com/system/resources/previews/000/442/657/non_2x/vector-search-icon.jpg"
              alt=""
              onClick={() => this.focusSearchIcon()}
            />
          </div>
          <button
            className="navbar-links"
            onClick={() => this.props.signOutUser(id)}
          >
            Logout
          </button>
          <SocialLinks />
        </div>
        {displayContent}
      </div>
    );
    let displayContent = null;
    let path = this.props.location.pathname;

    if (this.state.query !== "") {
      let errMsg = <h2>{`Titles related to: ${this.state.query}`}</h2>;
      if (this.props.queryData[0] === "No Matches")
        errMsg = (
          <p className="search-links">
            {"Explore Media Related to: "}
            <button
              onClick={() => {
                this.makeSearch("Crime");
              }}
              className="premade-search"
            >
              Crime
            </button>{" "}
            {" | "}
            <button
              onClick={() => {
                this.makeSearch("Action");
              }}
              className="premade-search"
            >
              Action
            </button>
            {" | "}
            <button
              onClick={() => {
                this.makeSearch("Drama");
              }}
              className="premade-search"
            >
              Drama
            </button>
            {" | "}
            <button
              onClick={() => {
                this.makeSearch("Thriller");
              }}
              className="premade-search"
            >
              Thriller
            </button>
          </p>
        );
      displayContent = (
        <div className="search-page">
          {navbarcontent}
          {errMsg}
          <SearchPage query={this.state.query} />
        </div>
      );
    } else {
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
            <h2>My List</h2>
            <MyListPage />
          </div>
        );
    }

    return displayContent;
  }
}
export default NavBar;
