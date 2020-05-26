import { padsArray } from "../Globals";
import { TOGGLEMETRONOME } from "../actions/toggleMetronomeIsPlayingAction.js";

const initMetronomeIsPlaying = () => {
  const metronomePlayingStates = {};
  padsArray.forEach(key => {
    metronomePlayingStates[key + 'metronomeIsPlaying'] = false;
  });
  return metronomePlayingStates;
};

export default (state, action) => {
  if (!state) {
    state = initMetronomeIsPlaying();
  }

  switch (action.type) {
    case TOGGLEMETRONOME:
      state[action.key + 'metronomeIsPlaying'] = action.metronomeIsPlaying;
      return state;
    default:
      return state;
  }
}
