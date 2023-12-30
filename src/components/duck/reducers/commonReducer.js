import {
  GET_TOURS_STARTED,
  GET_TOURS_SUCCESS,
  GET_TOURS_FAILED,
  GET_TOURS_NOTSTARTED,
} from "../types/types";

export const loadState = {
  NOTSTARTED: "NOTSTARTED",
  STARTED: "STARTED",
  SUCCESS: "SUCCESS",
  FAILED: "FAILED",
};

const initialState = {
  showLoading: false,
  error: "",
  userData: {
    email: "",
    id: "",
    roles: [],
  },
  tours: [],
  GET_TOURSLoadState: loadState.NOTSTARTED,
  apiError: false,
  signupLoadState: loadState.NOTSTARTED,
  changePasswordLoadState: loadState.NOTSTARTED,
  deleteDashboardLoadState: loadState.NOTSTARTED,
};

export const IAppState = {
  showLoading: false,
  error: "",
  userData: {
    email: "",
    id: "",
    roles: [],
  },
  tours: [],
  GET_TOURSLoadState: loadState.NOTSTARTED,
  apiError: false,
  signupLoadState: loadState.NOTSTARTED,
  changePasswordLoadState: loadState.NOTSTARTED,
  deleteDashboardLoadState: loadState.NOTSTARTED,
}

const commonReducer = (state = initialState , action) => {
  switch (action.type) {
    // Use action types directly in switch cases
    case GET_TOURS_STARTED:
      return {
        ...state,
        GET_TOURSLoadState: loadState.STARTED,
        apiError: false,
      };
    case GET_TOURS_SUCCESS:
      return {
        ...state,
        GET_TOURSLoadState: loadState.SUCCESS,
        tours: action.payload,
        apiError: false,
      };
    case GET_TOURS_FAILED:
      return {
        ...state,
        GET_TOURSLoadState: loadState.FAILED,
        apiError: true,
        error: action.payload,
      };
    case GET_TOURS_NOTSTARTED:
      return {
        ...state,
        GET_TOURSLoadState: loadState.NOTSTARTED,
      };
    default:
      return state;
  }
};

export default commonReducer;
