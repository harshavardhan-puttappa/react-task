import { VALIDATE_USER, LOGOUT_USER } from "./types";

export const validateUser = (name, pwd) => dispatch => {
  dispatch({
    type: VALIDATE_USER,
    payload: { name, pwd }
  });
};

export const logoutUser = () => dispatch => {
  dispatch({
    type: LOGOUT_USER
  });
};
