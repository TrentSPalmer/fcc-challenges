import { INCCOLORCOUNT } from "../actions/colorCounterAction";

export default (state = 1, action) => {
  switch (action.type) {
    case INCCOLORCOUNT:
      return action.count;
    default:
      return state;
  }
};
