import { combineReducers } from "redux";
import logReducer from "./logReducer";
import techReducer from "./techReducer";

export default combineReducers({
  log: logReducer, // State is called log
  tech: techReducer, // State is called tech
});
