import React, { Component, PureComponent } from "react";
import Post from "./Post.jsx";
import { connect } from "react-redux";
import propTypes from "prop-types";
import { fetchPosts } from "../../actions/postActions";

class PostList extends PureComponent {
  componentDidMount() {
    this.props.fetchPosts();    
  }

  render() {
    const postNodes = this.props.posts.map(post => (
      <Post key={post["id"]}>
        {post.title}
        {post.body}
      </Post>
    ));
    return (
      <div className="container">
        <h1>Posts!</h1>
        <br/>
        {postNodes}
      </div>
    );
  }
}

PostList.propTypes = {
  posts: propTypes.array.isRequired,
  fetchPosts: propTypes.func.isRequired
};

const mapStateToProps = state => ({
  posts: state.posts.items
});

export default connect(mapStateToProps, { fetchPosts })(PostList);
