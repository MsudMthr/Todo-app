import { combineReducers } from "redux";

import { subscribeReducer } from "./subscribe/subscribeReducer";
import todoReducer from "./todo/todoReducer";
const rootReducer = combineReducers({
  userState: subscribeReducer,
  todoState: todoReducer,
});

export default rootReducer;
