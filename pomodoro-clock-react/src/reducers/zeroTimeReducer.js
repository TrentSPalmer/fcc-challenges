import { SETZEROTIME } from "../actions/zeroTimeAction";

export default (state, action) => {
  if (!state) {
    state = 0;
  }

  switch (action.type) {
    case SETZEROTIME:
      return action.zeroTime;
    default:
      return state;
  }
};
