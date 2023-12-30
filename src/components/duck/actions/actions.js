import {
  GET_TOURS_STARTED,
  GET_TOURS_SUCCESS,
  GET_TOURS_FAILED,
  GET_TOURS_NOTSTARTED,
} from "../types/types";
import { getTours } from "../../apis/toursAPi";

export const getAllTours = (values) => {
  return (dispatch) => {
    dispatch({ type: GET_TOURS_STARTED, payload: false });

    getTours(values)
      .then((res) => {
        dispatch({ type: GET_TOURS_SUCCESS, payload: res });
      })
      .catch((error) => {
        if (error.name === "ServerError") {
          dispatch({ type: GET_TOURS_FAILED, payload: error.message });
        } else if (error.name === "GET_TOURSError") {
          dispatch({ type: GET_TOURS_FAILED, payload: error.message });
        } else {
          dispatch({ type: GET_TOURS_FAILED, payload: error.message });
        }
      });
  };
};
