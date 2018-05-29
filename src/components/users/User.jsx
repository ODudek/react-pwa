import React, { Component } from "react";

class User extends Component {
  render() {
    return (
      <div className="box">
        <p>Name: {this.props.children[0]}</p>
        <p>Username: {this.props.children[1]}</p>
        <p>Website: {this.props.children[2]}</p>
      </div>
    );
  }
}

export default User;
