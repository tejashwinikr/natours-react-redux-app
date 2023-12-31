import {
  GET_TOURS_STARTED,
  GET_TOURS_SUCCESS,
  GET_TOURS_FAILED,
  GET_TOURS_NOTSTARTED,
  SIGNUP_STARTED,
  SIGNUP_SUCCESS,
  SIGNUP_FAILED,
  SIGNUP_NOTSTARTED,
} from "../types/types";
import { getTours } from "../../apis/toursAPi";
import { SignUpUser } from "../../apis/userAPi";

export const SignUp = (values) => {
  return (dispatch) => {
    dispatch({ type: SIGNUP_STARTED, payload: false });

    SignUpUser(values) 
      .then((res) => {
        dispatch({ type: SIGNUP_SUCCESS, payload: res.data.user });
      })
      .catch((error) => {
        if (error.name === "ServerError") {
          dispatch({ type: SIGNUP_FAILED, payload: error.message });
          dispatch({ type: SIGNUP_NOTSTARTED, payload: false });
        } else if (error.name === "GET_TOURSError") {
          dispatch({ type: SIGNUP_FAILED, payload: error.message });
          dispatch({ type: SIGNUP_NOTSTARTED, payload: false });
        } else {
          dispatch({ type: SIGNUP_FAILED, payload: error.message });
          dispatch({ type: SIGNUP_NOTSTARTED, payload: false });
        }
      });
  };
};

export const getAllTours = (values) => {
  return (dispatch) => {
    dispatch({ type: GET_TOURS_STARTED, payload: false });

    getTours(values)
      .then((res) => {
        // console.log("===9999",res)
        dispatch({ type: GET_TOURS_SUCCESS, payload: res.data.data });
      })
      .catch((error) => {
        if (error.name === "ServerError") {
          dispatch({ type: GET_TOURS_FAILED, payload: error.message });
          dispatch({ type: GET_TOURS_NOTSTARTED, payload: false });
        } else if (error.name === "GET_TOURSError") {
          dispatch({ type: GET_TOURS_FAILED, payload: error.message });
          dispatch({ type: GET_TOURS_NOTSTARTED, payload: false });
        } else {
          dispatch({ type: GET_TOURS_FAILED, payload: error.message });
          dispatch({ type: GET_TOURS_NOTSTARTED, payload: false });
        }
      });
  };
};
