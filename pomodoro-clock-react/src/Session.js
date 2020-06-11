import React from 'react';

import { colors } from './globals'
import SessionControls from './SessionControls';

const Session = () => {
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

  return(
    <div style={style}>
      <div id="session-label" style={sessionTextStyle}>Session Length</div>
      <SessionControls />
    </div>
  );
};

export default Session;
