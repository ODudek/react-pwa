import API from "../api";
import { FETCH_PHOTOS } from "./types";
const PHOTO_API = "https://jsonplaceholder.typicode.com/photos";

export const fetchPhotos = () => dispatch => {
  API.GET(PHOTO_API, photos => {
    dispatch({
      type: FETCH_PHOTOS,
      payload: photos.data
    });
  });
};
