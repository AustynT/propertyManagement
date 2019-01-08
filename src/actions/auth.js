import axios from "axios";

import { ROOT_URL } from "../config";

import { AUTHENTICATE_USER } from "./types";

export function signUp(fields, success) {
  return function(disbatch) {
    axios
      .post(`${ROOT_URL}/signUp`, fields)
      .then(response => {
        disbatch({
          type: AUTHENTICATE_USER,
          payload: response.data
        });
        success();
      })
      .catch(err => {
        if (err) {
          console.log(err);
        }
      });
  };
}
