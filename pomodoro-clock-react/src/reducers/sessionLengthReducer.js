import { SETSESSIONLENGTH } from "../actions/sessionLengthAction";

export default (state, action) => {
  if (!state) {
    state = 25;
  }

  switch (action.type) {
    case SETSESSIONLENGTH:
      return action.sessionLength;
    default:
      return state;
  }
};
