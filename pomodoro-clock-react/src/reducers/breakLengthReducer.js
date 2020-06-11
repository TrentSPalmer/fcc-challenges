import { SETBREAKLENGTH } from "../actions/breakLengthAction";

export default (state, action) => {
  if (!state) {
    state = 5;
  }

  switch (action.type) {
    case SETBREAKLENGTH:
      return action.breakLength;
    default:
      return state;
  }
};
