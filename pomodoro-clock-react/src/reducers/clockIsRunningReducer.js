import { SETCLOCKISRUNNING } from "../actions/clockIsRunningAction";

export default (state, action) => {
  if (!state) {
    state = false;
  }

  switch (action.type) {
    case SETCLOCKISRUNNING:
      return action.clockIsRunning;
    default:
      return state;
  }
};
