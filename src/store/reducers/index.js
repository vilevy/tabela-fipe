import { combineReducers } from "redux";
import generalReducer from "./general";
import selectedReducer from "./selected";
import optionsReducer from "./options";

const reducers = combineReducers({
  general: generalReducer,
  selected: selectedReducer,
  options: optionsReducer,
});

export default reducers;
