import { DRUMPADGRID } from "../actions/setDrumPadGridAction.js";

export default (state = 'drumPadGrid', action) => {
  switch(action.type) {
    case DRUMPADGRID:
      return action.drumPadGrid;
    default:
      return state;
  }
}
