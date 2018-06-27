import {combineReducers} from "redux";
import todos from "./todos";
import visibilityFilter from "./visibilityFilter";
import modal from "./modal";
import temp from "./temp";

export default combineReducers({
  todos,
  visibilityFilter,
  modal,
  temp
});
