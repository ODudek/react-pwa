import React, { Component } from "react";

class Photo extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-image">
          <figure className="image">
            <img src="" alt="Image" />
          </figure>
        </div>
        <div className="card-content">
          <p className="title">test</p>
        </div>
      </div>
    );
  }
}

export default Photo;
