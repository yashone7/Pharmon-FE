import { combineReducers } from "redux";
import alertReducer from "./alertReducer";
import authReducer from "./authReducer";
import employeeReducer from "./employeeReducer";
import chemistReducer from "./chemistReducer";

export default combineReducers({
  alertReducer,
  authReducer,
  employeeReducer,
  chemistReducer
});
