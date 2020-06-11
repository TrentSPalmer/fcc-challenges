export const colors = {
  prussianBlue: '#0b3c5d',
  skyBlue: '#328cc1',
  goldLeaf: '#d9b310',
  ivoryBlack: '#1d2731',
};

export const makeClock = (remainingTime) => {
  const remainingSeconds = remainingTime % 60;
  const remainingMinutes = Math.floor(remainingTime / 60);
  const minutes = remainingMinutes > 9 ? remainingMinutes.toString() : '0' + remainingMinutes.toString() ;
  const seconds = remainingSeconds > 9 ? remainingSeconds.toString() : '0' + remainingSeconds.toString() ;
  return minutes + ':' + seconds;
};
