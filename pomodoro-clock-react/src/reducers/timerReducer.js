import { SETTIMER } from "../actions/timerAction";

export default (state, action) => {
  if (!state) {
    state = 'Session';
  }

  switch (action.type) {
    case SETTIMER:
      return action.timer;
    default:
      return state;
  }
};
