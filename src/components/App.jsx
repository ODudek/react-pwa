import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PostList from "./posts/PostList.jsx";
import Menu from "./Menu.jsx";
import PhotoList from "./photos/PhotoList.jsx";
import UserList from "./users/UserList.jsx";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="has-text-centered">
          <Menu />
          <Route exact path="/posts" component={PostList} />
          <Route exact path="/users" component={UserList} />
          <Route exact path="/photos" component={PhotoList} />
        </div>
      </Router>
    );
  }
}

export default App;
