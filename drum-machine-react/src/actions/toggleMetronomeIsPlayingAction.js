export const TOGGLEMETRONOME = "TOGGLEMETRONOME";

export const toggleMetronomeIsPlayingAction = (key,metronomeIsPlaying) => {
  return {
    type: TOGGLEMETRONOME,
    key: key,
    metronomeIsPlaying: metronomeIsPlaying,
  };
};
