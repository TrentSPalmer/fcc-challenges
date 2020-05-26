import { padsArray,initialIsMetronome } from "../Globals";

const getIsMetronomeStatuses = () => {
  const metronomeStatuses = {};
  padsArray.forEach(key => {
    metronomeStatuses[key + 'isMetronome'] = sessionStorage.getItem(key + 'isMetronome');
  });
  return metronomeStatuses;
}

export default (state, action) => {
  initialIsMetronome();

  switch (action.type) {
    default:
      return getIsMetronomeStatuses();
  }
};
