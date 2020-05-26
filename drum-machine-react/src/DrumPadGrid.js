import React from 'react';
import { connect } from "react-redux";
import { padsArray } from "./Globals";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSyncAlt } from "@fortawesome/free-solid-svg-icons";

import './DrumPadGrid.css';

import { toggleMetronomeIsPlayingAction } from "./actions/toggleMetronomeIsPlayingAction";
import { shouldMetronomeRestartAction } from "./actions/shouldMetronomeRestartAction";

const mapStateToProps = (state) => ({ ...state });

const mapDispatchToProps = (dispatch) => ({
  toggleMetronomeIsPlayingAction: (key,metronomeIsPlaying) => dispatch(toggleMetronomeIsPlayingAction(key,metronomeIsPlaying)),
  shouldMetronomeRestartAction: (key,restartMetronome) => dispatch(shouldMetronomeRestartAction(key,restartMetronome)),
});

class DrumPadGrid extends React.Component {
  constructor(props) {
    super(props);
    this.playSample = this.playSample.bind(this);
    this.metronome = this.metronome.bind(this);
    this.getVolume = this.getVolume.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  };

  playSample(key) {
    if (this.props.metronomeStatuses[key + 'isMetronome'] === 'false') {
      const audioFileText = document.getElementById(key).src.slice(36);
      document.getElementById('display-top').innerHTML = "<p>" + key +": " + audioFileText.replace(/\//g," ").replace(/-/g,"&#8209;") + "</p>";
      const keyDuration = 1000;
      const sound = document.getElementById(key);
      const audioFile = this.props.samplesUrls[key];
      const thisVolume = this.getVolume(key);
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
        const newSound = new Audio('https://trentpalmer.org/drumsamples/' + audioFile);
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
      if (this.props.metronomePlayingStates[key + 'metronomeIsPlaying'] === false) {
        this.props.toggleMetronomeIsPlayingAction(key,true);
        this.metronome(key);
      } else {
        this.props.toggleMetronomeIsPlayingAction(key,false);
      }
    }
  };

  handleKeyPress(e) {
    if ([81,87,69,65,83,68,90,88,67].includes(e.keyCode)) {
      this.playSample(String.fromCharCode(e.keyCode));
    } else if (e.keyCode === 86){
      document.getElementById('volume').focus();
    }
  };

  getVolume(key) {
    const machineVolume = parseInt(sessionStorage.getItem('volume'));
    const padVolumeOffSet = parseInt(sessionStorage.getItem(key + 'volume'));
    const thisVolume = (machineVolume + padVolumeOffSet) / 100;
    return thisVolume > 1 ? 1 : thisVolume < 0 ? 0 : thisVolume;
  };

  metronome(key) {
    const audioFileText = document.getElementById(key).src.slice(36);
    document.getElementById('display-top').innerHTML = "<p>" + key +": " + audioFileText.replace(/\//g," ").replace(/-/g,"&#8209;") + "</p>";
    const keyDuration = this.props.metronomeTempos[key+'metronomeTempo'];
    const sound = document.getElementById(key);
    sound.volume = this.getVolume(key);
    sound.play();
    const self = this;
    let refreshMetronome = setInterval(function(){
      sound.pause();
      sound.currentTime = 0;
      sound.volume = self.getVolume(key);
      sound.play();
      if (self.props.shouldMetronomeRestart[key + 'restartMetronome']) {
        self.props.shouldMetronomeRestartAction(key,false);
        clearInterval(refreshMetronome);
        self.metronome(key);
      }
      if (keyDuration !== self.props.metronomeTempos[key+'metronomeTempo']) {
        clearInterval(refreshMetronome);
        self.metronome(key);
      }
      if (self.props.metronomePlayingStates[key + 'metronomeIsPlaying'] === false) {
        clearInterval(refreshMetronome);
      }
    },keyDuration);
  };

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress, false);
  };

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress, false);
  };

  render() {
    const rowOfPads = (keys) => {
      return keys.map((item,index) => {
        return <div key={index} id={item+"pad"} className="drum-pad" onClick={() => this.playSample(item)}>
          <audio id={item} className="clip" src={"https://trentpalmer.org/drumsamples/"+this.props.samplesUrls[item]}></audio>
          {(() => {
            if (this.props.metronomeStatuses[item + 'isMetronome'] === 'false') {
              return <p>{item}</p>;
            } else if (this.props.metronomeStatuses[item + 'isMetronome'] === 'true' && this.props.metronomePlayingStates[item + 'metronomeIsPlaying'] === false) {
              return <p>{item + ' '}<FontAwesomeIcon id="metronomeIcon" icon={faSyncAlt}  className="metronomeIcon"/></p>
            } else if (this.props.metronomeStatuses[item + 'isMetronome'] === 'true' && this.props.metronomePlayingStates[item + 'metronomeIsPlaying'] === true) {
              const tempo = Math.round(60000 / this.props.metronomeTempos[item +'metronomeTempo']);
              return <p>{tempo + ' '}<FontAwesomeIcon id="metronomeIcon" icon={faSyncAlt}  className="metronomeIcon"/></p>
            }
          })()}
          </div>;
      });
    };
    return (
      <div id="drum-pad-grid">
        <div className="drum-pad-row">
          {rowOfPads(padsArray.slice(0,3))}
        </div>
        <div className="drum-pad-row">
          {rowOfPads(padsArray.slice(3,6))}
        </div>
        <div className="drum-pad-row">
          {rowOfPads(padsArray.slice(6,))}
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DrumPadGrid);
