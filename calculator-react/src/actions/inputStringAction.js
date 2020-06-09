export const SETINPUTSTRING = "SETINPUTSTRING";

export const inputStringAction = (inputString) => {
  return {
    type: SETINPUTSTRING,
    inputString: inputString,
  };
};
