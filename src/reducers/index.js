import { combineReducers } from "redux";
import postReducer from "./postReducer";
import userReducer from "./userReducer";
import photoReducer from "./photoReducer";

export default combineReducers({
  posts: postReducer,
  users: userReducer,
  photos: photoReducer
});
