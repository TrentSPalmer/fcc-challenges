import React from 'react';
import { connect } from "react-redux";

import './Selection.css';
import { toggleMetronomeIsPlayingAction } from "./actions/toggleMetronomeIsPlayingAction";
import { padsArray } from "./Globals";

const mapStateToProps = (state) => ({ ...state });

const mapDispatchToProps = (dispatch) => ({
  toggleMetronomeIsPlayingAction: (key,metronomeIsPlaying) => dispatch(toggleMetronomeIsPlayingAction(key,metronomeIsPlaying)),
});

class Stop extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  };

  handleClick() {
    padsArray.forEach(pad => {
      if (this.props.metronomePlayingStates[pad + 'metronomeIsPlaying'] === true) {
        this.props.toggleMetronomeIsPlayingAction(pad,false);
      }
    });
  }

  render() {
    return (
      <div id="stop" className="selection" onClick={this.handleClick}>
        <p>STOP</p>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Stop);
