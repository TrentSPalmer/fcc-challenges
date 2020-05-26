export const CHANGEVOLUME = "CHANGEVOLUME";

export const setVolumeAction = (volume) => {
  return {
    type: CHANGEVOLUME,
    volume: volume,
  };
};
