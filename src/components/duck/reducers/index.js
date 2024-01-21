import commonReducer, { IAppState } from "./commonReducer";
import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { createHashHistory } from "history";

// eslint-disable-next-line no-unused-vars
const history = createHashHistory();

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    app: commonReducer,
  });

export const IApplicationState = {
  app: IAppState,
  // router: RouterState,
};

export default createRootReducer;
