import React, { Component } from "react";
import Photo from "./Photo.jsx";
import { connect } from "react-redux";
import propTypes from "prop-types";
import { fetchPhotos } from "../../actions/photoActions";

class PhotoList extends Component {
  constructor() {
    super();
    this.prevPage = this.prevPage.bind(this);
    this.nextPage = this.nextPage.bind(this);
  }
  componentDidMount() {
    this.props.fetchPhotos();
  }
  prevPage(e) {
    console.log(e.type);
  }
  nextPage(e) {
    console.log(e.type);
  }
  render() {
    const photoNodes = this.props.photos.map(photo => (
      <Photo key={photo["id"]}>
        {photo.thumbnailUrl}
        {photo.title}
        {photo.url}
      </Photo>
    ));
    return (
      <div>
        <h1>Photos!</h1>
        {/* {photoNodes} */}
        <nav className="pagination" role="navigation" aria-label="pagination">
          <a className="pagination-previous" disabled onClick={this.prevPage}>
            Previous
          </a>
          <a className="pagination-next" onClick={this.nextPage}>
            Next page
          </a>
        </nav>
      </div>
    );
  }
}

PhotoList.propTypes = {
  photos: propTypes.array.isRequired,
  fetchPhotos: propTypes.func.isRequired
};

const mapStateToProps = state => ({
  photos: state.photos.items
});

export default connect(mapStateToProps, { fetchPhotos })(PhotoList);
