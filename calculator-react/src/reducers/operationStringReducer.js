import { SETOPERATIONSTRING } from "../actions/operationStringAction";

export default (state, action) => {
  if (!state) {
    state = '';
  }

  switch (action.type) {
    case SETOPERATIONSTRING:
      return action.operationString;
    default:
      return state;
  };
};
