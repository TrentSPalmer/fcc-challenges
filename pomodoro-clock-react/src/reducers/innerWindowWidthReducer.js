import { SETWINDOWINNERWIDTH } from "../actions/innerWindowWidthAction";

export default (state, action) => {
  if (!state) {
    state = window.innerWidth;
  }

  switch (action.type) {
    case SETWINDOWINNERWIDTH:
      return action.windowInnerWidth;
    default:
      return state;
  };
};
