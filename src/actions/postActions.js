import { FETCH_POST, NEW_POST } from "./types";
import axios from "axios";
export const fetch_post = () => (dispatch) => {
  axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((res) =>
      dispatch({
        type: FETCH_POST,
        payload: res.data,
      })
    )
    .catch((error) => {
      console.error(error);
    });
};

export const create_post = (postdata) => (dispatch) => {
  axios
    .post("https://jsonplaceholder.typicode.com/posts", postdata)
    .then((res) =>
      dispatch({
        type: NEW_POST,
        payload: res.data,
      })
    )
    .catch((error) => console.log(error));
};
