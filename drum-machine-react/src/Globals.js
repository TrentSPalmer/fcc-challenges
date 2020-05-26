export const padsArray = ['Q','W','E','A','S','D','Z','X','C'];

export const resetDefaults = () => {
  initialSamples();
  initialPadVolumes();
  initialIsMetronome();
  initialMetronomeTempos();
};

export const initialPadVolumes = () => {
  padsArray.forEach(pad => {
    if (!sessionStorage.hasOwnProperty(pad + "volume")) {
      sessionStorage.setItem(pad + "volume","+0");
    }
  });
};

export const initialIsMetronome = () => {
  padsArray.forEach(pad => {
    if (!sessionStorage.hasOwnProperty(pad + "isMetronome")) {
      sessionStorage.setItem(pad + "isMetronome",false);
    }
  });
};

export const initialMetronomeTempos = () => {
  padsArray.forEach(pad => {
    if (!sessionStorage.hasOwnProperty(pad + "metronomeTempo")) {
      sessionStorage.setItem(pad + "metronomeTempo",652);
    }
  });
};

export const initialSamples = () => {
  if (!sessionStorage.hasOwnProperty(padsArray[0])) {
    sessionStorage.setItem(padsArray[0],"Assorted-Hits/Cymbals/CYCdh_Crash-01.wav");
  }
  if (!sessionStorage.hasOwnProperty(padsArray[1])) {
    sessionStorage.setItem(padsArray[1],"Assorted-Hits/Cymbals/CYCdh_MultiCrash-01.wav");
  }
  if (!sessionStorage.hasOwnProperty(padsArray[2])) {
    sessionStorage.setItem(padsArray[2],"Assorted-Hits/Cymbals/CYCdh_MultiCrashHi-01.wav");
  }
  if (!sessionStorage.hasOwnProperty(padsArray[3])) {
    sessionStorage.setItem(padsArray[3],"Assorted-Hits/Cymbals/CYCdh_MultiCrashLo-01.wav");
  }
  if (!sessionStorage.hasOwnProperty(padsArray[4])) {
    sessionStorage.setItem(padsArray[4],"Assorted-Hits/Snares/Ludwig-A/CYCdh_LudFlamA-05.wav");
  }
  if (!sessionStorage.hasOwnProperty(padsArray[5])) {
    sessionStorage.setItem(padsArray[5],"Assorted-Hits/Snares/Ludwig-A/CYCdh_LudRimA-07.wav");
  }
  if (!sessionStorage.hasOwnProperty(padsArray[6])) {
    sessionStorage.setItem(padsArray[6],"Assorted-Hits/Kicks/Loose-Kick/CYCdh_LooseKick-08.wav");
  }
  if (!sessionStorage.hasOwnProperty(padsArray[7])) {
    sessionStorage.setItem(padsArray[7],"Assorted-Hits/Snares/Ludwig-A/CYCdh_LudSnrA-05.wav");
  }
  if (!sessionStorage.hasOwnProperty(padsArray[8])) {
    sessionStorage.setItem(padsArray[8],"Assorted-Hits/Snares/Ludwig-A/CYCdh_LudSnrOffA-08.wav");
  }
};
