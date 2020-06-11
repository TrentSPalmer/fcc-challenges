import React from 'react';
import { connect } from "react-redux";

import { colors } from './globals'

const mapStateToProps = (state) => ({ ...state });

class Clock extends React.Component {
  render() {
    const clockStyle = {
      height: '40%',
      width: '100%',
    }

    const timerLabelStyle = {
      height: '30%',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      color: colors.goldLeaf,
    }

    const timerStyle = {
      height: '70%',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      fontSize: 96,
    }

    return(
      <div style={clockStyle}>
      <div id='timer-label' style={timerLabelStyle}>{this.props.timer}</div>
      <div id='time-left' style={timerStyle}>{this.props.clock}</div>
      </div>
    );
  };
};

export default connect(mapStateToProps)(Clock);
