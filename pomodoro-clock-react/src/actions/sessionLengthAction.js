export const SETSESSIONLENGTH = "SETSESSIONLENGTH";

export const sessionLengthAction = (sessionLength) => {
  return {
    type: SETSESSIONLENGTH,
    sessionLength: sessionLength,
  };
};
