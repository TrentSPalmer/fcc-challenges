export const SETMETRONOMETEMPO = "SETMETRONOMETEMPO";

export const setMetronomeTempoAction = (key,tempo) => {
  return {
    type: SETMETRONOMETEMPO,
    key: key,
    tempo: tempo,
  };
};
