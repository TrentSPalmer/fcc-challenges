export const SETBREAKLENGTH = "SETBREAKLENGTH";

export const breakLengthAction = (breakLength) => {
  return {
    type: SETBREAKLENGTH,
    breakLength: breakLength,
  };
};
