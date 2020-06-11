import React from 'react';

import Break from './Break';
import Session from './Session';

const Top = () => {

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

  return(
    <div style={style}>
      <div style={titleStyle}>Pomodoro Clock</div>
      <div style={breakAndSessionStyle}>
        <Break />
        <Session />
      </div>
    </div>
  );
}

export default Top;
