import React from 'react';
import { connect } from "react-redux";

import './DisplayMiddle.css';
import DrumPadGrid from "./DrumPadGrid";
import SelectionLeft from "./SelectionLeft";
import SelectionRight from "./SelectionRight";
import VolumeContainer from "./VolumeContainer";
import SelectionMenu from "./SelectionMenu";

const mapStateToProps = (state) => ({ ...state });

class DisplayMiddle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showVolumeToolTip: false,
    };
    this.handleMouseOverOut = this.handleMouseOverOut.bind(this);
  };

  handleMouseOverOut(willShow) {
    if (willShow !== this.state.showVolumeToolTip) {
      this.setState({
        showVolumeToolTip: willShow,
      });
    }
  };

  render() {
    const selectionMenus = ['selectionMenu','volumeSelectionMenu','metronomeSelectionMenu'];
    return (
      <div id="display-middle">
        <div id="display-middle-left">
          <div id="display-middle-left-a">
          </div>
          <div id="display-middle-left-b">
            { this.props.drumPadGrid === 'drumPadGrid' && <DrumPadGrid /> }
            { selectionMenus.includes(this.props.drumPadGrid) && <SelectionMenu /> }
          </div>
          <div id="display-middle-left-c">
          </div>
        </div>
        <div id="display-middle-right">
          <div id="display-middle-right-a">
          </div>
          <SelectionLeft />
          <div id="display-middle-right-c">
          </div>
          <SelectionRight />
          <div id="display-middle-right-e">
          </div>
          <div id="display-middle-right-f" onMouseEnter={(event) => this.handleMouseOverOut(true)} onMouseLeave={(event) => this.handleMouseOverOut(false)}>
            { 
              this.state.showVolumeToolTip && <div className="volumeToolTipContainer">
                <div className="volumeToolTip">{this.props.volume}
                </div>
              </div>
            }
            <VolumeContainer />
          </div>
          <div id="display-middle-right-g">
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(DisplayMiddle);
