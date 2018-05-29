import API from "../api";
import { FETCH_USERS } from "./types";

const USER_API = "https://jsonplaceholder.typicode.com/users";
export const fetchUsers = () => dispatch => {
  API.GET(USER_API, user => {
    dispatch({
      type: FETCH_USERS,
      payload: user.data
    });
  });
};
