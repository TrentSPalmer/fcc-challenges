import React from 'react';

import { colors } from './globals'
import BreakControls from './BreakControls';

const Break = () => {
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

  return(
    <div style={style}>
      <div id="break-label" style={breakTextStyle}>Break Length</div>
      <BreakControls />
    </div>
  );
};

export default Break;
