export const SETTIMER = "SETTIMER";

export const timerAction = (timer) => {
  return {
    type: SETTIMER,
    timer: timer,
  };
};
