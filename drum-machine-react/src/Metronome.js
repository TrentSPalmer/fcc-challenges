import React from 'react';
import { connect } from "react-redux";

import './Selection.css';

import { setDrumPadGridAction } from "./actions/setDrumPadGridAction";
import { setSelectionMenuAction } from "./actions/setSelectionMenuAction";

const mapStateToProps = (state) => ({ ...state });

const mapDispatchToProps = (dispatch) => ({
  setDrumPadGridAction: (drumPadGrid) => dispatch(setDrumPadGridAction(drumPadGrid)),
  setSelectionMenuAction: (selectionMenu) => dispatch(setSelectionMenuAction(selectionMenu)),
});

class Metronome extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  };

  handleClick() {
    this.props.setSelectionMenuAction('pads');
    this.props.setDrumPadGridAction('metronomeSelectionMenu');
  }

  render() {
    return (
      <div id="metronome" className="selection" onClick={this.handleClick}>
        <p>metronome</p>
      </div>
    );
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Metronome);
