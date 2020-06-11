import { SETCLOCK } from "../actions/clockAction";

export default (state, action) => {
  if (!state) {
    state = '25:00';
  }

  switch (action.type) {
    case SETCLOCK:
      return action.time;
    default:
      return state;
  }
};
