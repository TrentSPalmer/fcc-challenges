export const SETWINDOWINNERHEIGHT = "SETWINDOWINNERHEIGHT";

export const innerWindowHeightAction = (windowInnerHeight) => {
  return {
    type: SETWINDOWINNERHEIGHT,
    windowInnerHeight: windowInnerHeight,
  };
};
