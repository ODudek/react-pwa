import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  browserHistory
} from "react-router-dom";
import PostList from "./posts/PostList.jsx";
import Menu from "./Menu.jsx";
import PhotoList from "./photos/PhotoList.jsx";
import UserList from "./users/UserList.jsx";

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <div className="has-text-centered">
          <Menu />
          <Route path="/posts" component={PostList} />
          <Route path="/users" component={UserList} />
          <Route path="/photos" component={PhotoList} />
        </div>
      </Router>
    );
  }
}

export default App;
