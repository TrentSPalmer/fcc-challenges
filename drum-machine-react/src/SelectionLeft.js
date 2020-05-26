import React from 'react';

import Selection from "./Selection";
import SelectVolume from "./SelectVolume";
import Metronome from "./Metronome";

const SelectionLeft = () => {
  return (
    <div id="selection-left">
      <Selection />
      <SelectVolume />
      <Metronome />
    </div>
  );
}

export default SelectionLeft;
