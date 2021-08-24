import React, { Component } from "react";
import "./header.css";
import { Link } from "react-router-dom";
export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { searchInput: "" };
  }
  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onSearchSubmit(this.state.searchInput);
  };
  render() {
    return (
      <header className="header">
        <div className="logo">
          <Link to="/">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/300px-YouTube_Logo_2017.svg.png"
              alt="youtube"
            />
          </Link>
        </div>
        <form className="search" onSubmit={this.onFormSubmit}>
            <div className="input-group" style={{flexWrap:"nowrap"}}>
              <input
                value={this.state.searchInput}
                onChange={(event) => {
                  console.log(this.props);
                  this.setState({ searchInput: event.target.value });
                }}
                type="search"
                className="form-control rounded"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="search-addon"
                required
                style={{minWidth:"200px"}}
              />
              <button type="submit" className="btn btn-outline-primary">
                Search
              </button>
            </div>

        </form>
        <div className="profile">

        </div>
      </header>
    );
  }
}
