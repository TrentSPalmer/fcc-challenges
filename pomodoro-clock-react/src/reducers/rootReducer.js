import { combineReducers } from "redux";
import innerWindowWidthReducer from "./innerWindowWidthReducer";
import innerWindowHeightReducer from "./innerWindowHeightReducer";
import breakLengthReducer from "./breakLengthReducer";
import sessionLengthReducer from "./sessionLengthReducer";
import timerReducer from "./timerReducer";
import clockReducer from "./clockReducer";
import clockIsRunningReducer from "./clockIsRunningReducer";
import zeroTimeReducer from "./zeroTimeReducer";

export default combineReducers({
  innerWindowWidth: innerWindowWidthReducer,
  innerWindowHeight: innerWindowHeightReducer,
  breakLength: breakLengthReducer,
  sessionLength: sessionLengthReducer,
  timer: timerReducer,
  clock: clockReducer,
  clockIsRunning: clockIsRunningReducer,
  zeroTime: zeroTimeReducer,
});
