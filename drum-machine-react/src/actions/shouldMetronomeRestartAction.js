export const RESTARTMETRONOME = "RESTARTMETRONOME";

export const shouldMetronomeRestartAction = (key,restartMetronome) => {
  return {
    type: RESTARTMETRONOME,
    key: key,
    restartMetronome: restartMetronome,
  };
};
