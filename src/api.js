import axios from "axios";

const API = {
  GET: (url, callback) => {
    axios
      .get(url)
      .then(callback)
      .catch(error => console.error(error));
  }
};

export default API;
