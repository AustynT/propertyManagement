import axios from "axios";

import { ROOT_URL } from "../config";

import { actions } from "./types";

export function signUp(fields, success) {
  return function(dispatch) {
    axios
      .post(`${ROOT_URL}/signUp`, fields)
      .then(response => {
        const token = response.token;
        localStorage.setItem("token", token);
        dispatch(actions.authenticateUser(response.user));
        success();
      })
      .catch(err => {
        if (err) {
          console.log(err);
        }
      });
  };
}

export function signIn(fields, success) {
  return function(dispatch) {
    axios
      .post(`${ROOT_URL}/signIn`, fields)
      .then(response => {
        const token = response.token;
        localStorage.setItem("token", token);
        dispatch(actions.authenticateUser(response.user));
        success();
      })
      .catch(err => {
        if (err) {
          console.log(err);
        }
      });
  };
}
