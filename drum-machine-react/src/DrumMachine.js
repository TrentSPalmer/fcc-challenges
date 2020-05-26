import React from 'react';

import './DrumMachine.css';
import DisplayMiddle from "./DisplayMiddle";

const DrumMachine = () => {
  return (
    <div id="drum-machine">
      <div id="display">
        <div id="display-top">
        </div>
        <DisplayMiddle />
        <div id="display-bottom">
        </div>
      </div>
    </div>
  );
}

export default DrumMachine;
