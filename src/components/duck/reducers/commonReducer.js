import {
  GET_TOURS_STARTED,
  GET_TOURS_SUCCESS,
  GET_TOURS_FAILED,
  GET_TOURS_NOTSTARTED,
  SIGNUP_STARTED,
  SIGNUP_SUCCESS,
  SIGNUP_FAILED,
  SIGNUP_NOTSTARTED,
  LOGIN_STARTED,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGIN_NOTSTARTED,
  GET_A_TOUR_STARTED,
  GET_A_TOUR_SUCCESS,
  GET_A_TOUR_FAILED,
  GET_A_TOUR_NOTSTARTED,
} from "../types/types";

export const loadState = {
  NOTSTARTED: "NOTSTARTED",
  STARTED: "STARTED",
  SUCCESS: "SUCCESS",
  FAILED: "FAILED",
};

const initialState = {
  error: "",
  userData: {
    email: "",
    id: "",
    roles: [],
  },
  tours: [],
  user: [],
  tour: {},
  GET_TOURSLoadState: loadState.NOTSTARTED,
  apiError: false,
  signupLoadState: loadState.NOTSTARTED,
  changePasswordLoadState: loadState.NOTSTARTED,
  getATourLoadState: loadState.NOTSTARTED,
};

export const IAppState = {
  error: "",
  userData: {
    email: "",
    id: "",
  },
  tours: [],
  user: [],
  tour: {},
  GET_TOURSLoadState: loadState.NOTSTARTED,
  apiError: false,
  signupLoadState: loadState.NOTSTARTED,
  loginLoadState: loadState.NOTSTARTED,
  changePasswordLoadState: loadState.NOTSTARTED,
  getATourLoadState: loadState.NOTSTARTED,
};

const commonReducer = (state = initialState, action) => {
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

    case SIGNUP_STARTED:
      return {
        ...state,
        signupLoadState: loadState.STARTED,
        apiError: false,
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        signupLoadState: loadState.SUCCESS,
        user: action.payload,
        apiError: false,
      };
    case SIGNUP_FAILED:
      return {
        ...state,
        signupLoadState: loadState.FAILED,
        apiError: true,
        error: action.payload,
      };
    case SIGNUP_NOTSTARTED:
      return {
        ...state,
        signupLoadState: loadState.NOTSTARTED,
      };

    case LOGIN_STARTED:
      return {
        ...state,
        loginLoadState: loadState.STARTED,
        apiError: false,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loginLoadState: loadState.SUCCESS,
        userData: action.payload,
        apiError: false,
      };
    case LOGIN_FAILED:
      return {
        ...state,
        loginLoadState: loadState.FAILED,
        apiError: true,
        error: action.payload,
      };
    case LOGIN_NOTSTARTED:
      return {
        ...state,
        loginLoadState: loadState.NOTSTARTED,
      };

    case GET_A_TOUR_STARTED:
      return {
        ...state,
        getATourLoadState: loadState.STARTED,
        apiError: false,
      };
    case GET_A_TOUR_SUCCESS:
      return {
        ...state,
        getATourLoadState: loadState.SUCCESS,
        tour: action.payload,
        apiError: false,
      };
    case GET_A_TOUR_FAILED:
      return {
        ...state,
        getATourLoadState: loadState.FAILED,
        apiError: true,
        error: action.payload,
      };
    case GET_A_TOUR_NOTSTARTED:
      return {
        ...state,
        getATourLoadState: loadState.NOTSTARTED,
      };

    default:
      return state;
  }
};

export default commonReducer;
