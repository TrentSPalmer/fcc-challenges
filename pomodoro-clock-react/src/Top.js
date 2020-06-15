import React from 'react';
import { connect } from "react-redux";

import Break from './Break';
import Session from './Session';

const mapStateToProps = (state) => ({ ...state });

class Top extends React.Component {
  render() {
    const width = this.props.innerWindowWidth;
    const height = this.props.innerWindowHeight;
    const style = {
      height: '40%',
      width: '100%',
    }

    const titleStyle = {
      height: '50%',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      fontSize: 48,
    }

    const breakAndSessionStyle = {
      height: '50%',
      width: '100%',
      display: 'flex',
    }

    if (height > width && width < 385) {
      titleStyle['fontSize'] = 36;
    }

    return(
      <div style={style}>
      <div style={titleStyle}>Pomodoro Clock</div>
      <div style={breakAndSessionStyle}>
      <Break />
      <Session />
      </div>
      </div>
    );
  };
};

export default connect(mapStateToProps)(Top);
