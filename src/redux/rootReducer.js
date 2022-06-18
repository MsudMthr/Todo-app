import { combineReducers } from "redux";

import { subscribeReducer } from "./subscribe/subscribeReducer";

const rootReducer = combineReducers({
  userState: subscribeReducer,
});

export default rootReducer;
