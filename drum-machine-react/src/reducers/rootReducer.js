import { combineReducers } from "redux";
import samplesReducer from "./samplesReducer";
import volumeOffSetsReducer from "./volumeOffSetsReducer";
import setVolumeReducer from "./setVolumeReducer";
import setDrumPadGridReducer from "./setDrumPadGridReducer";
import setSelectionMenuReducer from "./setSelectionMenuReducer";
import isMetronomeReducer from "./isMetronomeReducer";
import metronomeTemposReducer from "./metronomeTemposReducer";
import isMetronomePlayingReducer from "./isMetronomePlayingReducer";
import shouldMetronomeRestartReducer from "./shouldMetronomeRestartReducer";

export default combineReducers({
  samplesUrls: samplesReducer,
  volumeOffSets: volumeOffSetsReducer,
  volume: setVolumeReducer,
  drumPadGrid: setDrumPadGridReducer,
  selectionMenu: setSelectionMenuReducer,
  metronomeStatuses: isMetronomeReducer,
  metronomeTempos: metronomeTemposReducer,
  metronomePlayingStates: isMetronomePlayingReducer,
  shouldMetronomeRestart: shouldMetronomeRestartReducer,
});
