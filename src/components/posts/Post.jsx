import React, { Component } from "react";

class Post extends Component {
  render() {
    return (
      <div className="box">
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{this.props.children[0]}</strong>
            </p>
            <p>{this.props.children[1]}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Post;
