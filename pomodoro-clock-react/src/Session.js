import React from 'react';
import { connect } from "react-redux";

import { colors } from './globals'
import SessionControls from './SessionControls';

const mapStateToProps = (state) => ({ ...state });

class Session extends React.Component {
  render() {
    const width = this.props.innerWindowWidth;
    const height = this.props.innerWindowHeight;
    const style = {
      height: '100%',
      width: '50%',
    };

    const sessionTextStyle = {
      height: '50%',
      width: '90%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      textAlign: 'left',
      marginLeft: '10%',
      color: colors.goldLeaf,
    };
    if (height > width && width < 380) {
      sessionTextStyle['fontSize'] = 20;
    }


    return(
      <div style={style}>
      <div id="session-label" style={sessionTextStyle}>Session Length</div>
      <SessionControls />
      </div>
    );
  }
};

export default connect(mapStateToProps)(Session);
