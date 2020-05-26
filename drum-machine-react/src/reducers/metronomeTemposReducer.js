import { SETMETRONOMETEMPO } from "../actions/setMetronomeTempoAction.js";
import { padsArray,initialMetronomeTempos } from "../Globals";

const getMetronomeTempos = () => {
  const metronomeTempos = {};
  padsArray.forEach(key => {
    metronomeTempos[key + 'metronomeTempo'] = parseInt(sessionStorage.getItem(key + 'metronomeTempo'));
  });
  return metronomeTempos;
}

export default (state, action) => {
  if (!state) {
    initialMetronomeTempos();
    state = getMetronomeTempos();
  }

  switch (action.type) {
    case SETMETRONOMETEMPO:
      state[action.key + 'metronomeTempo'] = action.tempo;
      return state;
    default:
      return state;
  }
};
