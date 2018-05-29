import API from "../api";
import { FETCH_POSTS } from "./types";
const POST_API = "https://jsonplaceholder.typicode.com/posts";

export const fetchPosts = () => dispatch => {
  API.GET(POST_API, posts => {
    dispatch({
      type: FETCH_POSTS,
      payload: posts.data
    });
  });
};
