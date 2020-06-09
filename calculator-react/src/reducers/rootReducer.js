import { combineReducers } from "redux";
import innerWindowWidthReducer from "./innerWindowWidthReducer";
import innerWindowHeightReducer from "./innerWindowHeightReducer";
import inputStringReducer from "./inputStringReducer";
import operationStringReducer from "./operationStringReducer";

export default combineReducers({
  innerWindowWidth: innerWindowWidthReducer,
  innerWindowHeight: innerWindowHeightReducer,
  inputString: inputStringReducer,
  operationString: operationStringReducer,
});
