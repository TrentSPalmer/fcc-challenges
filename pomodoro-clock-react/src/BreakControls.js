import React from 'react';
import { connect } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleDown } from "@fortawesome/free-solid-svg-icons";
import { faArrowCircleUp } from "@fortawesome/free-solid-svg-icons";
import { colors,makeClock } from './globals'

import { breakLengthAction } from "./actions/breakLengthAction";
import { clockAction } from "./actions/clockAction";

const mapDispatchToProps = (dispatch) => ({
  breakLengthAction: (breakLength) => dispatch(breakLengthAction(breakLength)),
  clockAction: (time) => dispatch(clockAction(time)),
});

const mapStateToProps = (state) => ({ ...state });

class BreakControls extends React.Component {
  constructor(props) {
    super(props);
    this.handleDownArrowMouseEvent = this.handleDownArrowMouseEvent.bind(this);
    this.handleUpArrowMouseEvent = this.handleUpArrowMouseEvent.bind(this);
    this.incrementBreak = this.incrementBreak.bind(this);
    this.decrementBreak = this.decrementBreak.bind(this);
    this.state = {
      downColor: colors.ivoryBlack,
      upColor: colors.ivoryBlack,
    };
  };

  incrementBreak() {
    if (this.props.breakLength < 60) {
      const newBreakLength = this.props.breakLength + 1;
      if (!this.props.clockIsRunning) {
        this.props.breakLengthAction(newBreakLength);
        if (this.props.timer === 'Break') {
          this.props.clockAction(makeClock(newBreakLength * 60));
        }
      } else {
        if (this.props.timer === 'Session') {
          this.props.breakLengthAction(newBreakLength);
        }
      }
    }
  };

  decrementBreak() {
    if (this.props.breakLength > 1) {
      const newBreakLength = this.props.breakLength - 1;
      if (!this.props.clockIsRunning) {
        this.props.breakLengthAction(newBreakLength);
        if (this.props.timer === 'Break') {
          this.props.clockAction(makeClock(newBreakLength * 60));
        }
      } else {
        if (this.props.timer === 'Session') {
          this.props.breakLengthAction(newBreakLength);
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
      justifyContent: 'flex-end',
      marginRight: '25%',
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
        <div id='break-decrement' style={downArrowStyle} onClick={this.decrementBreak}
              onTouchStart={this.handleDownArrowMouseEvent} onTouchEnd={this.handleDownArrowMouseEvent}
              onMouseDown={this.handleDownArrowMouseEvent} onMouseUp={this.handleDownArrowMouseEvent}>
          <FontAwesomeIcon icon={faArrowCircleDown}/>
        </div>

        <p id='break-length' style={breakStyle}>{this.props.breakLength}</p>

        <div id='break-increment' style={upArrowStyle} onClick={this.incrementBreak}
              onTouchStart={this.handleUpArrowMouseEvent} onTouchEnd={this.handleUpArrowMouseEvent}
              onMouseDown={this.handleUpArrowMouseEvent} onMouseUp={this.handleUpArrowMouseEvent}>
          <FontAwesomeIcon icon={faArrowCircleUp}/>
        </div>
      </div>
    );
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BreakControls);
