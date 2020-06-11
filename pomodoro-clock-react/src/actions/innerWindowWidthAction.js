export const SETWINDOWINNERWIDTH = "SETWINDOWINNERWIDTH";

export const innerWindowWidthAction = (windowInnerWidth) => {
  return {
    type: SETWINDOWINNERWIDTH,
    windowInnerWidth: windowInnerWidth,
  };
};
