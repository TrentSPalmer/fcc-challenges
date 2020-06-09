import { SETINPUTSTRING } from "../actions/inputStringAction";

export default (state, action) => {
  if (!state) {
    state = '';
  }

  switch (action.type) {
    case SETINPUTSTRING:
      return action.inputString;
    default:
      return state;
  };
};
