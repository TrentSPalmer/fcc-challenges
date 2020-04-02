export const INCCOLORCOUNT = "INCCOLORCOUNT";

export const colorCounterAction = (count) => {
  return {
    type: INCCOLORCOUNT,
    count: count,
  };
};
