import { padsArray,initialPadVolumes } from "../Globals";

const getVolumeOffSets = () => {
  const volumeOffSets = {};
  padsArray.forEach(key => {
    volumeOffSets[key + 'volume'] = sessionStorage.getItem(key + 'volume');
  });
  return volumeOffSets;
}

export default (state, action) => {
  if (!state) {
    initialPadVolumes();
    state = getVolumeOffSets();
  }

  switch (action.type) {
    default:
      return state;
  }
};
