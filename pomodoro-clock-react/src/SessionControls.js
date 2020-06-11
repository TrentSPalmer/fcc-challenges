import React from 'react';
import { connect } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleDown } from "@fortawesome/free-solid-svg-icons";
import { faArrowCircleUp } from "@fortawesome/free-solid-svg-icons";
import { colors,makeClock } from './globals'

import { sessionLengthAction } from "./actions/sessionLengthAction";
import { clockAction } from "./actions/clockAction";

const mapDispatchToProps = (dispatch) => ({
  sessionLengthAction: (sessionLength) => dispatch(sessionLengthAction(sessionLength)),
  clockAction: (time) => dispatch(clockAction(time)),
});

const mapStateToProps = (state) => ({ ...state });

class SessionControls extends React.Component {
  constructor(props) {
    super(props);
    this.handleDownArrowMouseEvent = this.handleDownArrowMouseEvent.bind(this);
    this.handleUpArrowMouseEvent = this.handleUpArrowMouseEvent.bind(this);
    this.incrementSession = this.incrementSession.bind(this);
    this.decrementSession = this.decrementSession.bind(this);
    this.state = {
      downColor: colors.ivoryBlack,
      upColor: colors.ivoryBlack,
    };
  };

  incrementSession() {
    if (this.props.sessionLength < 60) {
      const newSessionLength = this.props.sessionLength + 1;
      if (!this.props.clockIsRunning) {
        this.props.sessionLengthAction(newSessionLength);
        if (this.props.timer === 'Session') {
          this.props.clockAction(makeClock(newSessionLength * 60));
        }
      } else {
        if (this.props.timer === 'Break') {
          this.props.sessionLengthAction(newSessionLength);
        }
      }
    }
  };

  decrementSession() {
    if (this.props.sessionLength > 1) {
      const newSessionLength = this.props.sessionLength - 1;
      if (!this.props.clockIsRunning) {
        this.props.sessionLengthAction(newSessionLength);
        if (this.props.timer === 'Session') {
          this.props.clockAction(makeClock(newSessionLength * 60));
        }
      } else {
        if (this.props.timer === 'Break') {
          this.props.sessionLengthAction(newSessionLength);
        }
      }
    }
  };

  handleDownArrowMouseEvent(e) {
    if (e.type === 'mousedown' || e.type === 'touchstart') {
      this.setState({downColor: colors.goldLeaf});
    } else if (e.type === 'mouseup' || e.type === 'touchend') {
      this.setState({downColor: colors.ivoryBlack});
    }
  };

  handleUpArrowMouseEvent(e) {
    if (e.type === 'mousedown' || e.type === 'touchstart') {
      this.setState({upColor: colors.goldLeaf});
    } else if (e.type === 'mouseup' || e.type === 'touchend') {
      this.setState({upColor: colors.ivoryBlack});
    }
  };

  render() {
    const style = {
      height: '50%',
      width: '75%',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      marginLeft: '25%',
      fontSize: 32,
    };

    const breakStyle = {
      width: 50,
    }

    const downArrowStyle = {
      color: this.state.downColor,
    }

    const upArrowStyle = {
      color: this.state.upColor,
    }

    return(
      <div style={style}>
        <div id='session-decrement' style={downArrowStyle} onClick={this.decrementSession}
              onTouchStart={this.handleDownArrowMouseEvent} onTouchEnd={this.handleDownArrowMouseEvent}
              onMouseDown={this.handleDownArrowMouseEvent} onMouseUp={this.handleDownArrowMouseEvent}>
          <FontAwesomeIcon icon={faArrowCircleDown}/>
        </div>

        <p id='session-length' style={breakStyle}>{this.props.sessionLength}</p>

        <div id='session-increment' style={upArrowStyle} onClick={this.incrementSession}
              onTouchStart={this.handleUpArrowMouseEvent} onTouchEnd={this.handleUpArrowMouseEvent}
              onMouseDown={this.handleUpArrowMouseEvent} onMouseUp={this.handleUpArrowMouseEvent}>
          <FontAwesomeIcon icon={faArrowCircleUp}/>
        </div>
      </div>
    );
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionControls);
