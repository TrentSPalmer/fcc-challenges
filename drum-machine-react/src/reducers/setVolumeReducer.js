import { CHANGEVOLUME } from "../actions/setVolumeAction.js";

let DEFAULTVOLUME = 30;

if (!sessionStorage.hasOwnProperty('volume')) {
  sessionStorage.setItem('volume','30');
} else {
  DEFAULTVOLUME = sessionStorage.getItem('volume');
}

export default (state = DEFAULTVOLUME, action) => {
  switch (action.type) {
    case CHANGEVOLUME:
      return action.volume;
    default:
      return state;
  }
}
