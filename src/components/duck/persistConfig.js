import storage from "redux-persist/lib/storage"; // defaults to localStorage for web and AsyncStorage for react-native
import { persistReducer } from "redux-persist";
import { IAppState } from "./reducers/commonReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: [IAppState], // specify the reducers you want to persist
};

const reducer = () => persistReducer(persistConfig, reducer);

export default reducer;
