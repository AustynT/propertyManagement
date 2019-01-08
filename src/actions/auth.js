import axios from "axios";

import { ROOT_URL } from "../config";

export function signUp(fields, success) {
  console.log(fields);
  return function(disbatch) {
    axios
      .post(`${ROOT_URL}/signUp`, fields)
      .then(response => {
        console.log(response);
        success();
      })
      .catch(err => {
        if (err) {
          console.log(err);
        }
      });
  };
}
