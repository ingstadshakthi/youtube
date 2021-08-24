import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import axios from "axios";
import React, { Component } from "react";
import AllCards from "./components/AllCards";
import VideoPlayer from "./components/VideoPlayer";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { cardList: [] };
    this.onSearchSubmit = this.onSearchSubmit.bind(this);
  }
  async onSearchSubmit(searchInput) {
    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=100&q=${searchInput}&type=video&key=AIzaSyD2TYFaUzdR280W5cDEuC0QNnwcda-9-u0`
    );
    this.setState({ cardList: response.data.items });
  }

  render() {
    return (
      <div className="app">
        <Router>
          <Switch>
            <Route exact path="/">
              <Header onSearchSubmit={this.onSearchSubmit} />
              <AllCards cardList={this.state.cardList} />
            </Route>
            <Route path="/search">
              <Header onSearchSubmit={this.onSearchSubmit} />
              <VideoPlayer />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
