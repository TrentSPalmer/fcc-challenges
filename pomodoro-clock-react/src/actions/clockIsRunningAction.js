export const SETCLOCKISRUNNING = "SETCLOCKISRUNNING";

export const clockIsRunningAction = (clockIsRunning) => {
  return {
    type: SETCLOCKISRUNNING,
    clockIsRunning: clockIsRunning,
  };
};
