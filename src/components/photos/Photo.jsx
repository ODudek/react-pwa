import React, { Component } from "react";

class Photo extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-image">
          <figure className="image">
            <img className="is-150" src={this.props.children[0]} alt="Image" />
          </figure>
        </div>
        <div className="card-content">
          <p className="title">{this.props.children[1]}</p>
        </div>
      </div>
    );
  }
}

export default Photo;
