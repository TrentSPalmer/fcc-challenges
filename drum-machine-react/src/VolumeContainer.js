import React from 'react';
import { connect } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeDown } from "@fortawesome/free-solid-svg-icons";
import { faVolumeUp } from "@fortawesome/free-solid-svg-icons";
import './VolumeContainer.css';

import { setVolumeAction } from "./actions/setVolumeAction";

const mapStateToProps = (state) => ({ ...state });

const mapDispatchToProps = (dispatch) => ({
  setVolumeAction: (volume) => dispatch(setVolumeAction(volume)),
});

class VolumeContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleVolumeChange = this.handleVolumeChange.bind(this);
  };

  handleVolumeChange(e) {
    this.props.setVolumeAction(e.target.value);
    sessionStorage.setItem('volume',e.target.value);
  };

  componentDidMount() {
    document.getElementById('display-top').innerHTML = '<p id="volumeTip">press "V" to focus Volume so you can adjust with arrow keys</p>';
  };

  render() {
    return (
      <div id="volume-container">
        <div id="volume-up-icon-container">
          <FontAwesomeIcon id="volumeUpIcon" icon={faVolumeUp}  className="volumeIcon"/>
        </div>
        <div id="volume-input-container">
          <input id="volume" type="range" min="1" max="100" value={this.props.volume} onChange={this.handleVolumeChange}/>
        </div>
        <div id="volume-down-icon-container">
          <FontAwesomeIcon id="volumeDownIcon" icon={faVolumeDown} className="volumeIcon"/>
        </div>
      </div>
    );
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(VolumeContainer);
