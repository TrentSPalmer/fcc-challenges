export const SETCLOCK = "SETCLOCK";

export const clockAction = (time) => {
  return {
    type: SETCLOCK,
    time: time,
  };
};
