import { padsArray,initialSamples } from "../Globals";
import { SETSAMPLE } from "../actions/setSampleAction.js";

const getUrls = () => {
  const urls = {};
  padsArray.forEach(key => {
    urls[key] = sessionStorage.getItem(key);
  });
  return urls;
}

export default (state, action) => {
  if (!state) {
    initialSamples();
    state = getUrls();
  }

  switch (action.type) {
    case SETSAMPLE:
      state[action.key] = action.sample;
      return state;
    default:
      state = getUrls();
      return state;
  }
};
