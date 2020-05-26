import { padsArray } from "../Globals";
import { RESTARTMETRONOME } from "../actions/shouldMetronomeRestartAction.js";

const initRestartMetronome = () => {
  const restartMetronomes = {};
  padsArray.forEach(key => {
    restartMetronomes[key + 'restartMetronome'] = false;
  });
  return restartMetronomes;
};

export default (state, action) => {
  if (!state) {
    state = initRestartMetronome();
  }

  switch (action.type) {
    case RESTARTMETRONOME:
      state[action.key + 'restartMetronome'] = action.restartMetronome;
      return state;
    default:
      return state;
  }
}
