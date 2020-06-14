import React from 'react';
import NoSleep from 'nosleep.js';
import { connect } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import { faPauseCircle } from "@fortawesome/free-solid-svg-icons";
import { faSyncAlt } from "@fortawesome/free-solid-svg-icons";
import { colors,makeClock } from './globals'

import { clockIsRunningAction } from "./actions/clockIsRunningAction";
import { zeroTimeAction } from "./actions/zeroTimeAction";
import { clockAction } from "./actions/clockAction";
import { timerAction } from "./actions/timerAction";
import { sessionLengthAction } from "./actions/sessionLengthAction";
import { breakLengthAction } from "./actions/breakLengthAction";
import BeepSoundOgg from './BeepSound.ogg';

const mapDispatchToProps = (dispatch) => ({
  clockIsRunningAction: (clockIsRunning) => dispatch(clockIsRunningAction(clockIsRunning)),
  zeroTimeAction: (zeroTime) => dispatch(zeroTimeAction(zeroTime)),
  clockAction: (time) => dispatch(clockAction(time)),
  timerAction: (timer) => dispatch(timerAction(timer)),
  sessionLengthAction: (sessionLength) => dispatch(sessionLengthAction(sessionLength)),
  breakLengthAction: (breakLength) => dispatch(breakLengthAction(breakLength)),
});

const mapStateToProps = (state) => ({ ...state });

class Controls extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseEventPlay = this.handleMouseEventPlay.bind(this);
    this.handleMouseEventPause = this.handleMouseEventPause.bind(this);
    this.handleMouseEventReset = this.handleMouseEventReset.bind(this);
    this.handlePlay = this.handlePlay.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleNoSleep = this.handleNoSleep.bind(this);
    this.state = {
      playColor: colors.ivoryBlack,
      pauseColor: colors.ivoryBlack,
      resetColor: colors.ivoryBlack,
      sound: '',
    };
  };

  handleNoSleep() {
    if (navigator.userAgent.includes('Mobile')) {
      const self = this;
      var noSleep = new NoSleep();
      noSleep.enable();
      let refreshNoSleep = setInterval(function() {
        if (!self.props.clockIsRunning) {
          noSleep.disable();
          clearInterval(refreshNoSleep);
        }
      },5000);
    }
  };

  handlePlay() {
    if (this.props.clockIsRunning) {
      this.props.clockIsRunningAction(false);
    } else {
      this.props.clockIsRunningAction(true);
      this.handleNoSleep();
      const now = new Date();
      const nowSeconds = Math.floor(now.getTime() / 1000);
      const remainingTime = this.props.clock.split(':');
      const remainingSeconds = (60 * parseInt(remainingTime[0])) + parseInt(remainingTime[1]);
      this.props.zeroTimeAction(nowSeconds + remainingSeconds);
      const self = this;
      let refreshClock = setInterval(function(){
        if (!self.props.clockIsRunning) {
          clearInterval(refreshClock);
        } else {
          const now = new Date();
          const nowSeconds = Math.floor(now.getTime() / 1000);
          if (nowSeconds <= self.props.zeroTime) {
            const remainingTime = self.props.zeroTime - nowSeconds;
            const newClock = makeClock(remainingTime);
            if (newClock !== self.props.clock) {
              self.props.clockAction(newClock);
            }
          } else {
            let remainingTime = self.props.breakLength * 60;
            if (self.props.timer === 'Session') {
              self.props.timerAction('Break');
            } else {
              self.props.timerAction('Session');
              remainingTime = self.props.sessionLength * 60;
            }
            self.props.zeroTimeAction(nowSeconds + remainingTime);
            self.props.clockAction(makeClock(remainingTime));
          }
        }
      },1000);
    }
  };

  handleReset() {
    if (this.props.clockIsRunning) {
      this.props.clockIsRunningAction(false);
    }
    if (this.props.timer === 'Break') {
      this.props.timerAction('Session');
    }
    if (this.props.sessionLength !== 25) {
      this.props.sessionLengthAction(25);
    }
    if (this.props.breakLength !== 5) {
      this.props.breakLengthAction(5);
    }
    if (this.props.clock !== '25:00') {
      this.props.clockAction('25:00');
    }
    this.state.sound.pause();
    const oldSound = this.state.sound;
    oldSound.currentTime = 0;
  };

  componentDidUpdate(prevProps) {
    if (this.props.clock === '00:00') {
      this.state.sound.play();
    }
  };

  handleMouseEventPlay(e) {
    if (e.type === 'mousedown' || e.type === 'touchstart') {
      this.setState({playColor: colors.goldLeaf});
    } else if (e.type === 'mouseup' || e.type === 'touchend') {
      this.setState({playColor: colors.ivoryBlack});
    }
  };

  handleMouseEventPause(e) {
    if (e.type === 'mousedown' || e.type === 'touchstart') {
      this.setState({pauseColor: colors.goldLeaf});
    } else if (e.type === 'mouseup' || e.type === 'touchend') {
      this.setState({pauseColor: colors.ivoryBlack});
    }
  };

  handleMouseEventReset(e) {
    if (e.type === 'mousedown' || e.type === 'touchstart') {
      this.setState({resetColor: colors.goldLeaf});
    } else if (e.type === 'mouseup' || e.type === 'touchend') {
      this.setState({resetColor: colors.ivoryBlack});
    }
  };

  componentDidMount() {
    this.setState({sound: document.getElementById('beep')});
  };

  render() {
    const controlsStyle = {
      height: '20%',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: 48,
    }

    const playStyle = {
      color: this.state.playColor,
    };

    const pauseStyle = {
      color: this.state.pauseColor,
      width: 150,
    };

    const resetStyle = {
      color: this.state.resetColor,
    };

    return(
      <div style={controlsStyle}>
        <div id='start_stop' style={playStyle} onClick={this.handlePlay}
              onMouseDown={this.handleMouseEventPlay} onMouseUp={this.handleMouseEventPlay}
              onTouchStart={this.handleMouseEventPlay} onTouchEnd={this.handleMouseEventPlay}>
          <FontAwesomeIcon icon={faPlayCircle}/>
        </div>

        <FontAwesomeIcon style={pauseStyle} onMouseDown={this.handleMouseEventPause}
          onMouseUp={this.handleMouseEventPause} onTouchStart={this.handleMouseEventPause}
          onTouchEnd={this.handleMouseEventPause} onClick={() => {this.props.clockIsRunningAction(false)}} icon={faPauseCircle}/>

        <div id='reset' style={resetStyle} onClick={this.handleReset}
              onMouseDown={this.handleMouseEventReset} onMouseUp={this.handleMouseEventReset}
              onTouchStart={this.handleMouseEventReset} onTouchEnd={this.handleMouseEventReset}>
          <FontAwesomeIcon icon={faSyncAlt}/>
        </div>

        <audio id='beep' preload='auto' src={BeepSoundOgg} type='audio/ogg'></audio>
      </div>
    );
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Controls);
