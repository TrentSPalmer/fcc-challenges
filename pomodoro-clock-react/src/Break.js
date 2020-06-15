import React from 'react';
import { connect } from "react-redux";

import { colors } from './globals'
import BreakControls from './BreakControls';

const mapStateToProps = (state) => ({ ...state });

class Break extends React.Component {
  render() {
    const width = this.props.innerWindowWidth;
    const height = this.props.innerWindowHeight;
    const style = {
      height: '100%',
      width: '50%',
    };

    const breakTextStyle = {
      height: '50%',
      width: '90%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      textAlign: 'right',
      marginRight: '10%',
      color: colors.goldLeaf,
    };

    if (height > width && width < 380) {
      breakTextStyle['fontSize'] = 20;
    }

    return(
      <div style={style}>
      <div id="break-label" style={breakTextStyle}>Break Length</div>
      <BreakControls />
      </div>
    );
  }
};

export default connect(mapStateToProps)(Break);
