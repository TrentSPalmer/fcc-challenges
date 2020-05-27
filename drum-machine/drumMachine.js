$(document).ready(function () {

  initialSamples();

  let volume = sessionStorage.hasOwnProperty("volume") ?
    parseInt(sessionStorage.getItem('volume')) : 20;

  $('#volume').slider({
    orientation: "vertical",
    min: 0,
    max: 100,
    value: volume,
    range:"max",
    slide: function(event,ui) {
      sessionStorage.setItem('volume',ui.value);
      makeVolumeToolTip('#display-middle-right-f');
    }
  });

  $(document).keydown(function(e){
    if (qweasdzxc.includes(e.keyCode) && (!anyMenuDisplayed())) {
      playSample(String.fromCharCode(e.keyCode)+'pad');
    } else if (e.keyCode === 27 && menuDisplayed) {
      makeSelection('( cancel -- back )');
    } else if (e.keyCode === 27 && volumeMenuDisplayed) {
      makeVolumeSelection('( cancel -- back )');
    } else if (e.keyCode === 27 && metronomeMenuDisplayed) {
      makeMetronomeSelection('( cancel -- back )');
    } else if (e.keyCode === 86) {
      $('#volume .ui-slider-handle').focus();
    }
  });

  padsArray.forEach(pad => {
    makeAudioControl(pad);
  });

  makeVolumeToolTip('#display-middle-right-f');

  $('#selection').on('click',function() {
    if (!anyMenuDisplayed()) {
      makeSelection("keys");
    }
  });

  $('#display-middle').on('click','.selectionMenuItem',function() {
    makeSelection($(this).text());
  });

  $('#select-volume').on('click',function() {
    if (!anyMenuDisplayed()) {
      makeVolumeSelection("keys");
    }
  });

  $('#display-middle').on('click','.volumeSelectionMenuItem',function() {
    makeVolumeSelection($(this).text());
  });

  $('#metronome').on('click',function() {
    if (!anyMenuDisplayed()) {
      makeMetronomeSelection("keys");
    }
  });

  $('#display-middle').on('click','.metronomeSelectionMenuItem',function() {
    makeMetronomeSelection($(this).text());
  });

  $('#reset').on('click',function() {
    if (!anyMenuDisplayed()) {
      reset();
    }
  });

  $('#stop').on('click',function() {
    stopMetronomes();
  });

  padsArray.forEach(pad => {
    makeMetronomeIcons(pad);
  });
});

const makeMetronomeIcons = (pad) => {
  const html = $('#'+pad+'pad').html();
  if (sessionStorage.getItem(pad + 'isMetronome') === 'true') {
    $('#'+pad+'pad').html('<p>' + html + ' <i class="fa fa-refresh"></i></p>');
  }
};

const makeVolumeToolTip = (element) => {
  $(element).tooltip({
      content: sessionStorage.getItem('volume'),
      show: {delay: 250, duration: 0},
      classes: {
        "ui-tooltip": "highlight"
      },
      tooltipClass: "tool-tip-class",
  });
};

const makeAudioControl = (pad) => {
  const audioControl = pad + '<audio class="clip" id="'+pad+'" src="'+sampleUrlPreFix+sessionStorage.getItem(pad)+'"></audio>';
  $('#'+pad+'pad').html(audioControl);
};

const sampleUrlPreFix = "https://trentpalmer.org/drumsamples/"
const qweasdzxc = [81,87,69,65,83,68,90,88,67];

const playSample = (key) => {
  const audioFileText = $('#'+key[0]).attr('src').slice(36)
  $('#display-top').html(key[0] +": " + audioFileText.replace(/\//g,' ').replace(/-/g,'&#8209;'));
  if (sessionStorage.getItem(key[0] + 'isMetronome') === 'false') {
    const keyDuration = 1000;
    const sound = document.getElementById(key[0]);
    const audioFile = sessionStorage.getItem(key[0]);
    const thisVolume = getVolume(key[0]);
    if (sound.currentTime === 0) {
      sound.volume = thisVolume;
      sound.play();
      setTimeout(function(){
        const soundDuration = Math.floor(sound.duration);
        if (soundDuration > (keyDuration / 1000)) {
          sound.currentTime = soundDuration;
        }
      }, keyDuration);
    } else {
      const newSound = new Audio(sampleUrlPreFix + audioFile);
      newSound.volume = thisVolume;
      newSound.play();
      setTimeout(function(){
        const newSoundDuration = Math.floor(newSound.duration);
        if (newSoundDuration > (keyDuration / 1000)) {
          newSound.currentTime = newSoundDuration;
        }
      }, keyDuration);
    }
  } else {
    metronome(key[0]);
    sessionStorage.setItem(key[0]+'metronomeIsPlaying',
      (sessionStorage.getItem(key[0]+'metronomeIsPlaying')
        === 'false' ? 'true' : 'false'));
  }
};

const metronome = (key) => {
  let keyDuration = parseBPM(key);
  const sound = document.getElementById(key);
  sound.volume = getVolume(key);
  sound.play();
  let refreshMetronome = setInterval(function(){
    keyDuration = parseBPM(key);
    sound.pause();
    sound.currentTime = 0;
    sound.volume = getVolume(key);
    sound.play();
    if (sessionStorage.getItem(key + 'metronomeIsPlaying') === 'false') {
      clearInterval(refreshMetronome);
    }
  },keyDuration);
};

const parseBPM = (key) => {
  const bpm = parseInt(sessionStorage
    .getItem(key+'metronomeTempo').slice(-10).split(' ')[1]);
  return Math.round(60000 / bpm);
};

const getVolume = (key) => {
  const machineVolume = parseInt(sessionStorage.getItem('volume'));
  const padVolumeOffset = parseInt(sessionStorage.getItem(key+'volume'));
  const thisVolume = (machineVolume + padVolumeOffset) / 100;
  return thisVolume > 1 ? 1 : thisVolume < 0 ? 0 : thisVolume;
};

const initialSamples = () => {
  if (!sessionStorage.hasOwnProperty("volume")) {
    sessionStorage.setItem("volume","30");
  }
  padsArray.forEach(pad => {
    if (!sessionStorage.hasOwnProperty(pad + "volume")) {
      sessionStorage.setItem(pad + "volume","+0");
    }
    if (!sessionStorage.hasOwnProperty(pad + "isMetronome")) {
      sessionStorage.setItem(pad + "isMetronome",false);
    }
    if (!sessionStorage.hasOwnProperty(pad + "metronomeIsPlaying")) {
      sessionStorage.setItem(pad + "metronomeIsPlaying",false);
    }
    if (!sessionStorage.hasOwnProperty(pad + "metronomeTempo")) {
      sessionStorage.setItem(pad + "metronomeTempo","Andante: 92 bpm");
    }
  });
  if (!sessionStorage.hasOwnProperty("Q")) {
    sessionStorage.setItem("Q","Assorted-Hits/Cymbals/CYCdh_Crash-01.wav");
  }
  if (!sessionStorage.hasOwnProperty("W")) {
    sessionStorage.setItem("W","Assorted-Hits/Cymbals/CYCdh_MultiCrash-01.wav");
  }
  if (!sessionStorage.hasOwnProperty("E")) {
    sessionStorage.setItem("E","Assorted-Hits/Cymbals/CYCdh_MultiCrashHi-01.wav");
  }
  if (!sessionStorage.hasOwnProperty("A")) {
    sessionStorage.setItem("A","Assorted-Hits/Cymbals/CYCdh_MultiCrashLo-01.wav");
  }
  if (!sessionStorage.hasOwnProperty("S")) {
    sessionStorage.setItem("S","Assorted-Hits/Snares/Ludwig-A/CYCdh_LudFlamA-05.wav");
  }
  if (!sessionStorage.hasOwnProperty("D")) {
    sessionStorage.setItem("D","Assorted-Hits/Snares/Ludwig-A/CYCdh_LudRimA-07.wav");
  }
  if (!sessionStorage.hasOwnProperty("Z")) {
    sessionStorage.setItem("Z","Assorted-Hits/Kicks/Loose-Kick/CYCdh_LooseKick-08.wav");
  }
  if (!sessionStorage.hasOwnProperty("X")) {
    sessionStorage.setItem("X","Assorted-Hits/Snares/Ludwig-A/CYCdh_LudSnrA-05.wav");
  }
  if (!sessionStorage.hasOwnProperty("C")) {
    sessionStorage.setItem("C","Assorted-Hits/Snares/Ludwig-A/CYCdh_LudSnrOffA-08.wav");
  }
}
