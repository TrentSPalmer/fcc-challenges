let drumPadGrid = {};
let fileStringArray = [];
let padSelectingFor = '';
let menuDisplayed = false;
let volumeMenuDisplayed = false;
let metronomeMenuDisplayed = false;

const anyMenuDisplayed = () => {
  return menuDisplayed || volumeMenuDisplayed || metronomeMenuDisplayed;
};

const padsArray = ['Q','W','E','A','S','D','Z','X','C'];
const volumeMenuArray = ['+30','+20','+10','0','-10','-20','-30'];

const stopMetronomes = () => {
  padsArray.forEach(pad => {
    sessionStorage.setItem(pad + 'metronomeIsPlaying', 'false');
  });
}

const reset = () => {
  sessionStorage.clear();
  initialSamples();
  padsArray.forEach(pad => {
    makeAudioControl(pad);
  });
};

const makeMetronomeSelection = (selection) => {
  if (selection === "keys") {
    padSelectingFor = '';
    drumPadGrid = document.getElementById('drum-pad-grid');
    metronomeMenuDisplayed = true;
    showKeyMetronomeSelectionMenu();
    $('#metronomeSelectionMenu').attr("tabindex",0).focus();
    $('#display-top').append('<p id="menuScrollTip">scroll menu with arrow keys or PgUpDn, "esc" key to go back</p>');
  } else if (padsArray.includes(selection)) {
    padSelectingFor = selection;
    showMetronomeMenu();
    $('#metronomeSelectionMenu').attr("tabindex",0).focus();
  } else if (selection === 'Metronome Off') {
    sessionStorage.setItem(padSelectingFor + 'isMetronome',false);
    metronomeMenuDisplayed = false;
    $('#display-middle-left-b').html((drumPadGrid));
    $('#menuScrollTip').remove();
    makeAudioControl(padSelectingFor);
  } else if (selection.match(/\d{2,3}/)) {
    sessionStorage.setItem(padSelectingFor + 'metronomeTempo',selection.split(':')[1]);
    sessionStorage.setItem(padSelectingFor + 'isMetronome',true);
    metronomeMenuDisplayed = false;
    $('#display-middle-left-b').html((drumPadGrid));
    $('#menuScrollTip').remove();
    makeAudioControl(padSelectingFor);
    makeMetronomeIcons(padSelectingFor);
  } else if (selection === '( cancel -- back )') {
    if (padSelectingFor === '') {
      metronomeMenuDisplayed = false;
      $('#display-middle-left-b').html((drumPadGrid));
      $('#menuScrollTip').remove();
    } else {
      padSelectingFor = '';
      showKeyMetronomeSelectionMenu();
      $('#metronomeSelectionMenu').attr("tabindex",0).focus();
    }
  }
};

const showMetronomeMenu = () => {
  const selectionMenu = Object.keys(metronomeTempos)
    .map(item => (makeMetronomeSelectionMenuItem((() => {
      const metronomeStringArray = item.split(' ');
      if (metronomeStringArray.length === 2) {
        return metronomeStringArray[0] + ': ' + metronomeTempos[item].slice(0,-4);
      } else {
        return metronomeStringArray[0] + ' ' + metronomeStringArray[1] + ': ' + metronomeTempos[item].slice(0,-4);
      }
    })())));

  selectionMenu.unshift(makeMetronomeSelectionMenuItem('Metronome Off'));
  showMetronomeSelectionMenuItems(selectionMenu);
};

const showKeyMetronomeSelectionMenu = () => {
  const metronomeSelectionMenu = padsArray 
    .map(item => (makeMetronomeSelectionMenuItem(item)));

  showMetronomeSelectionMenuItems(metronomeSelectionMenu);
};

const makeMetronomeSelectionMenuItem = (selector) => {
  return '<div id="foo" class="metronomeSelectionMenuItem" title="">' + selector + '</div>';
};

const showMetronomeSelectionMenuItems = (menuItems) => {
  menuItems.unshift(makeMetronomeSelectionMenuItem('( cancel -- back )'));
  $('#display-middle-left-b').html(('<div id="metronomeSelectionMenu" class="selectionMenu"></div>'));
  for (let i = 0; i < menuItems.length; i++) {
    let j = i + 3000;
    $('#metronomeSelectionMenu').append(menuItems[i].replace('foo',j));
    $('#'+j).tooltip({
      content: makeMetronomeSelectionMenuItemToolTipContent($('#'+j).text()),
      position: { my: "right top+150", at: "center bottom" },
      show: {delay: 250, duration: 0},
      classes: {
        "ui-tooltip": "highlight"
      },
      tooltipClass: "tool-tip-class",
    });
  }
};

const makeMetronomeSelectionMenuItemToolTipContent = (text) => {
  if (padsArray.includes(text)) {
    return 'set metronome tempo for ' + text + ' (or disable)';
  } else if (text === 'Metronome Off') {
    return 'turn metronome off for ' + padSelectingFor;
  } else if (text === '( cancel -- back )') {
    return text;
  } else {
    return 'set metronome temp for ' + padSelectingFor + ': ' + text.split(':')[1] + ' bpm';
  }
}

const makeVolumeSelection = (selection) => {
  if (selection === "keys") {
    padSelectingFor = '';
    drumPadGrid = document.getElementById('drum-pad-grid');
    volumeMenuDisplayed = true;
    showKeyVolumeSelectionMenu();
    $('#volumeSelectionMenu').attr("tabindex",0).focus();
    $('#display-top').append('<p id="menuScrollTip">scroll menu with arrow keys or PgUpDn, "esc" key to go back</p>');
  } else if (padsArray.includes(selection)) {
    padSelectingFor = selection;
    showVolumeMenu();
    $('#volumeSelectionMenu').attr("tabindex",0).focus();
  } else if (volumeMenuArray.includes(selection)) {
    sessionStorage.setItem((padSelectingFor + 'volume'),selection);
    volumeMenuDisplayed = false;
    $('#display-middle-left-b').html((drumPadGrid));
    $('#menuScrollTip').remove();
  } else if (selection === '( cancel -- back )') {
    if (padSelectingFor === '') {
      volumeMenuDisplayed = false;
      $('#display-middle-left-b').html((drumPadGrid));
      $('#menuScrollTip').remove();
    } else {
      padSelectingFor = '';
      showKeyVolumeSelectionMenu();
      $('#volumeSelectionMenu').attr("tabindex",0).focus();
    }
  }
};

const showVolumeMenu = () => {
  const selectionMenu = volumeMenuArray
    .map(item => (makeVolumeSelectionMenuItem(item)));

  showVolumeSelectionMenuItems(selectionMenu);
};

const showKeyVolumeSelectionMenu = () => {
  const volumeSelectionMenu = padsArray 
    .map(item => (makeVolumeSelectionMenuItem(item)));

  showVolumeSelectionMenuItems(volumeSelectionMenu);
};

const makeVolumeSelectionMenuItem = (selector) => {
  return '<div id="foo" class="volumeSelectionMenuItem" title="">' + selector + '</div>';
};

const showVolumeSelectionMenuItems = (menuItems) => {
  menuItems.unshift(makeVolumeSelectionMenuItem('( cancel -- back )'));
  $('#display-middle-left-b').html(('<div id="volumeSelectionMenu" class="selectionMenu"></div>'));
  for (let i = 0; i < menuItems.length; i++) {
    let j = i + 2000;
    $('#volumeSelectionMenu').append(menuItems[i].replace('foo',j));
    $('#'+j).tooltip({
      content: makeVolumeSelectionMenuItemToolTipContent($('#'+j).text()),
      position: { my: "right top+150", at: "center bottom" },
      show: {delay: 250, duration: 0},
      classes: {
        "ui-tooltip": "highlight"
      },
      tooltipClass: "tool-tip-class",
    });
  }
};

const makeVolumeSelectionMenuItemToolTipContent = (text) => {
  if (padsArray.includes(text)) {
    return 'set volume offset for ' + text;
  } else if (text === '( cancel -- back )') {
    return text;
  } else {
    return  'set volume offset for ' + padSelectingFor + ': '+ text;
  }
}

const makeSelection = (selection) => {

  if (selection === "keys") {
    padSelectingFor = '';
    fileStringArray = [];
    drumPadGrid = document.getElementById('drum-pad-grid');
    menuDisplayed = true;
    showKeySelectionMenu();
    $('#selectionMenu').attr("tabindex",0).focus();
    $('#display-top').append('<p id="menuScrollTip">scroll menu with arrow keys or PgUpDn, "esc" key to go back</p>');
  } else if (padsArray.includes(selection)) {
    padSelectingFor = selection;
    showFirstDirMenu();
    $('#menuScrollTip').remove();
  } else if (selection.substring(selection.length - 4) !== '.wav' && selection !== '( cancel -- back )') {
    fileStringArray.push(selection);
    if (fileStringArray.length === 1) {
      showSecondDirMenu();
      $('#display-top').append('<p id="menuScrollTip">scroll menu with arrow keys or PgUpDn, "esc" key to go back</p>');
      $('#selectionMenu').attr("tabindex",0).focus();
    } else if (fileStringArray.length === 2) {
      showThirdDirMenu();
      $('#selectionMenu').attr("tabindex",0).focus();
    } else {
      showFourthDirMenu();
      $('#selectionMenu').attr("tabindex",0).focus();
    }
  } else if (selection.substring(selection.length - 4) === '.wav') {
    fileStringArray.push(selection);
    sessionStorage.setItem(padSelectingFor,fileStringArray.join('/'));
    menuDisplayed = false;
    $('#display-middle-left-b').html((drumPadGrid));
    $('#menuScrollTip').remove();
    makeAudioControl(padSelectingFor);
  } else if (selection === '( cancel -- back )') {
    if (fileStringArray.length === 0) {
      if (padSelectingFor === '') {
        menuDisplayed = false;
        $('#display-middle-left-b').html((drumPadGrid));
        $('#menuScrollTip').remove();
      } else {
        padSelectingFor = '';
        showKeySelectionMenu();
        $('#selectionMenu').attr("tabindex",0).focus();
        $('#display-top').append('<p id="menuScrollTip">scroll menu with arrow keys or PgUpDn, "esc" key to go back</p>');
      }
    } else if (fileStringArray.length === 1) {
      fileStringArray = [];
      showFirstDirMenu();
      $('#menuScrollTip').remove();
    } else if (fileStringArray.length === 2)  {
      fileStringArray.pop();
      showSecondDirMenu();
      $('#selectionMenu').attr("tabindex",0).focus();
    } else if (fileStringArray.length === 3)  {
      fileStringArray.pop();
      showThirdDirMenu();
      $('#selectionMenu').attr("tabindex",0).focus();
    }
  }
};


const showFourthDirMenu = () => {
  const selectionMenu = wavFiles[fileStringArray[0]][fileStringArray[1]][0][fileStringArray[2]]
    .map(item => (makeSelectionMenuItem(item)));
  showSelectionMenuItems(selectionMenu);
};


const showThirdDirMenu = () => {
  const selectionMenu = wavFiles[fileStringArray[0]][fileStringArray[1]]
    .filter(item => typeof item === 'string')
    .map(item => (makeSelectionMenuItem(item)));

  if (!(typeof wavFiles[fileStringArray[0]][fileStringArray[1]][0] === 'string')) {
    const moreDirs = Object.keys(wavFiles[fileStringArray[0]][fileStringArray[1]][0])
      .map(item => (makeSelectionMenuItem(item)));
    moreDirs.forEach(item => selectionMenu.push(item));
  }
  showSelectionMenuItems(selectionMenu);
};


const showSecondDirMenu = () => {
  const selectionMenu = Object.keys(wavFiles[fileStringArray[0]])
    .map(item => (makeSelectionMenuItem(item)));

  showSelectionMenuItems(selectionMenu);
};


const showFirstDirMenu = () => {
  const selectionMenu = Object.keys(wavFiles)
    .map(item => (makeSelectionMenuItem(item)));

  showSelectionMenuItems(selectionMenu);
};


const showKeySelectionMenu = () => {
  const selectionMenu = padsArray 
    .map(item => (makeSelectionMenuItem(item)));

  showSelectionMenuItems(selectionMenu);
};

const showSelectionMenuItems = (menuItems) => {
  menuItems.unshift(makeSelectionMenuItem('( cancel -- back )'));
  $('#display-middle-left-b').html(('<div id="selectionMenu" class="selectionMenu"></div>'));
  for (let i = 0; i < menuItems.length; i++) {
    let j = i + 1000;
    $('#selectionMenu').append(menuItems[i].replace('foo',j));
    $('#'+j).tooltip({
      content: makeSelectionMenuItemToolTipContent($('#'+j).text()),
      position: { my: "right top+150", at: "center bottom" },
      show: {delay: 250, duration: 0},
      classes: {
        "ui-tooltip": "highlight"
      },
      tooltipClass: "tool-tip-class",
    });
  }
};

const makeSelectionMenuItemToolTipContent = (text) => {
  if (padsArray.includes(text)) {
    return 'select for ' + text;
  } else if (text === '( cancel -- back )') {
    return text;
  } else if (fileStringArray.length === 0) {
    return 'select for ' + padSelectingFor + ': ' + text;
  } else if (fileStringArray.length === 1) {
    return 'select for ' + padSelectingFor + ': ' + fileStringArray[0] + '/' + text;
  } else {
    return 'select for ' + padSelectingFor + ': ' + fileStringArray.join('/') + '/' + text;
  }
}

const makeSelectionMenuItem = (selector) => {
  return '<div id="foo" class="selectionMenuItem" title="">' + selector + '</div>';
};
