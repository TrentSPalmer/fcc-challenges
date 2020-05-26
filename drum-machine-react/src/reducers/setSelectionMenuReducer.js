import { SELECTIONMENU } from "../actions/setSelectionMenuAction";

export default (state = 'pads', action) => {
  switch(action.type) {
    case SELECTIONMENU:
      return action.selectionMenu;
    default:
      return state;
  }
}
