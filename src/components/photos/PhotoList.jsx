import React, { Component } from "react";
import Photo from "./Photo.jsx";

class PhotoList extends Component {
  constructor() {
    super();
    this.state = { photos: [1, 3, 4] };
  }
  shouldComponentUpdate(nextProps) {
    console.log(nextProps);
    console.log("dziala");
  }
  render() {
    const photoNodes = this.state.photos.map(photo => {
      <Photo key={Date.now()}>
        <h1>test</h1>
      </Photo>;
    });
    return (
      <div>
        <h1>Photos!</h1>
        {photoNodes}
      </div>
    );
  }
}

export default PhotoList;
