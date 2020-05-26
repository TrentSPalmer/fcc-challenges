export const SETSAMPLE = "SETSAMPLE";

export const setSampleAction = (key,sample) => {
  return {
    type: SETSAMPLE,
    key: key,
    sample: sample,
  };
};
