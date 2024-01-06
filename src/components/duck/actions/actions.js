import {
  GET_TOURS_STARTED,
  GET_TOURS_SUCCESS,
  GET_TOURS_FAILED,
  GET_TOURS_NOTSTARTED,
  SIGNUP_STARTED,
  SIGNUP_SUCCESS,
  SIGNUP_FAILED,
  SIGNUP_NOTSTARTED,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGIN_NOTSTARTED,
  LOGIN_STARTED,
  GET_A_TOUR_STARTED,
  GET_A_TOUR_SUCCESS,
  GET_A_TOUR_FAILED,
  GET_A_TOUR_NOTSTARTED,
} from "../types/types";
import { getTours,getTourById } from "../../apis/toursAPi";
import { SignUpUser, Login } from "../../apis/userAPi";

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

export const loginUser = (values) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_STARTED, payload: false });

    Login(values)
      .then((res) => {
        dispatch({ type: LOGIN_SUCCESS, payload: res.data.user });
      })
      .catch((error) => {
        if (error.name === "ServerError") {
          dispatch({ type: LOGIN_FAILED, payload: error.message });
          dispatch({ type: LOGIN_NOTSTARTED, payload: false });
        } else if (error.name === "GET_TOURSError") {
          dispatch({ type: LOGIN_FAILED, payload: error.message });
          dispatch({ type: LOGIN_NOTSTARTED, payload: false });
        } else {
          dispatch({ type: LOGIN_FAILED, payload: error.message });
          dispatch({ type: LOGIN_NOTSTARTED, payload: false });
        }
      });
  };
};

export const getATour = (values) => {
  return (dispatch) => {
    dispatch({ type: GET_A_TOUR_STARTED, payload: false });

    getTourById(values)
      .then((res) => {
        dispatch({ type: GET_A_TOUR_SUCCESS, payload: res.data.data });
      })
      .catch((error) => {
        if (error.name === "ServerError") {
          dispatch({ type: GET_A_TOUR_FAILED, payload: error.message });
          dispatch({ type: GET_A_TOUR_NOTSTARTED, payload: false });
        } else if (error.name === "GET_TOURSError") {
          dispatch({ type: GET_A_TOUR_FAILED, payload: error.message });
          dispatch({ type: GET_A_TOUR_NOTSTARTED, payload: false });
        } else {
          dispatch({ type: GET_A_TOUR_FAILED, payload: error.message });
          dispatch({ type: GET_A_TOUR_NOTSTARTED, payload: false });
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