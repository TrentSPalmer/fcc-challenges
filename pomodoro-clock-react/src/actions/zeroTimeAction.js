export const SETZEROTIME = "SETZEROTIME";

export const zeroTimeAction = (zeroTime) => {
  return {
    type: SETZEROTIME,
    zeroTime: zeroTime,
  };
};
