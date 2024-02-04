import { createStore, applyMiddleware, compose } from "redux";
import { thunk } from "redux-thunk";
import logger from "redux-logger";
import rootReducer from "./reducers";
import { createHashHistory } from "history";
import { routerMiddleware } from "connected-react-router";

export const history = createHashHistory();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = window.initialReduxState;

export default function configureStore() {
  const reactRouterMiddleware = routerMiddleware(history);

  const middlewares = [thunk, reactRouterMiddleware];

  if (process.env.NODE_ENV !== "production") {
    middlewares.push(logger);
  }

  return createStore(
    rootReducer(history),
    initialState,
    composeEnhancers(applyMiddleware(...middlewares))
  );
}
