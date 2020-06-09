import { SETWINDOWINNERHEIGHT } from "../actions/innerWindowHeightAction";

export default (state, action) => {
  if (!state) {
    state = window.innerHeight;
  }

  switch (action.type) {
    case SETWINDOWINNERHEIGHT:
      return action.windowInnerHeight;
    default:
      return state;
  }
};
