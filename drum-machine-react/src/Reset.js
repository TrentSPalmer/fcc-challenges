import React from 'react';
import { connect } from "react-redux";

import './Selection.css';

import { resetDefaults,padsArray } from "./Globals";
import { setVolumeAction } from "./actions/setVolumeAction";
import { toggleMetronomeIsPlayingAction } from "./actions/toggleMetronomeIsPlayingAction";

const mapStateToProps = (state) => ({ ...state });

const mapDispatchToProps = (dispatch) => ({
  setVolumeAction: (volume) => dispatch(setVolumeAction(volume)),
  toggleMetronomeIsPlayingAction: (key,metronomeIsPlaying) => dispatch(toggleMetronomeIsPlayingAction(key,metronomeIsPlaying)),
});

class Reset extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  };

  handleClick() {
    sessionStorage.clear();
    resetDefaults();
    this.props.setVolumeAction(30);
    padsArray.forEach(pad => {
      if (this.props.metronomePlayingStates[pad + 'metronomeIsPlaying'] === true) {
        this.props.toggleMetronomeIsPlayingAction(pad,false);
      }
    });
    sessionStorage.setItem('volume',30);
  };

  render() {
    return (
      <div id="reset" className="selection" onClick={this.handleClick}>
        <p>RESET</p>
      </div>
    );
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Reset);
