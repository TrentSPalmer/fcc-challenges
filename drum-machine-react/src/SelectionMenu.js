import React from 'react';
import { connect } from "react-redux";

import { padsArray } from "./Globals";
import { wavFiles } from "./wavFiles";
import { metronomeTempos } from "./metronomeTempos";

import { setDrumPadGridAction } from "./actions/setDrumPadGridAction";
import { setSelectionMenuAction } from "./actions/setSelectionMenuAction";
import { setMetronomeTempoAction } from "./actions/setMetronomeTempoAction";
import { toggleMetronomeIsPlayingAction } from "./actions/toggleMetronomeIsPlayingAction";
import { setSampleAction } from "./actions/setSampleAction";
import { shouldMetronomeRestartAction } from "./actions/shouldMetronomeRestartAction";

const volumeSelectionMenuItems = ['+30','+20','+10','+0','-10','-20','-30'];

const mapStateToProps = (state) => ({ ...state });

const mapDispatchToProps = (dispatch) => ({
  setDrumPadGridAction: (drumPadGrid) => dispatch(setDrumPadGridAction(drumPadGrid)),
  setSelectionMenuAction: (selectionMenu) => dispatch(setSelectionMenuAction(selectionMenu)),
  setMetronomeTempoAction: (key,tempo) => dispatch(setMetronomeTempoAction(key,tempo)),
  toggleMetronomeIsPlayingAction: (key,metronomeIsPlaying) => dispatch(toggleMetronomeIsPlayingAction(key,metronomeIsPlaying)),
  setSampleAction: (key,sample) => dispatch(setSampleAction(key,sample)),
  shouldMetronomeRestartAction: (key,restartMetronome) => dispatch(shouldMetronomeRestartAction(key,restartMetronome)),
});

class SelectionMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fileStringArray: [],
      padSelectingFor: '',
    };
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
    this.makeMenuToolTipText = this.makeMenuToolTipText.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleBackNav = this.handleBackNav.bind(this);
    this.backToDrumPad = this.backToDrumPad.bind(this);
    this.handleEscKey = this.handleEscKey.bind(this);
  };

  makeMenuToolTipText(item) {
    if (item === '( cancel -- back )') {
      return item;
    } else {
      if (this.props.drumPadGrid === 'selectionMenu') {
        if (this.props.selectionMenu === 'pads') {
          return 'select for ' + item;
        } else if (this.props.selectionMenu === 'firstDirMenu') {
          return 'select for ' + this.state.padSelectingFor + ': ' + item;
        } else if (this.props.selectionMenu === 'secondDirMenu') {
          return 'select for ' + this.state.padSelectingFor + ': ' + this.state.fileStringArray[0] + '/' + item;
        } else {
          return 'select for ' + this.state.padSelectingFor + ': ' + this.state.fileStringArray.join('/') + '/' + item;
        }
      } else if (this.props.drumPadGrid === 'volumeSelectionMenu') {
        if (this.props.selectionMenu === 'pads') {
          return 'volume offset for ' + item;
        } else if (this.props.selectionMenu === 'volumeSelectionMenuItems') {
          return 'set volume offset for ' + this.state.padSelectingFor + ' ' + item;
        }
      } else if (this.props.drumPadGrid === 'metronomeSelectionMenu') {
        if (this.props.selectionMenu === 'pads') {
          return 'set metronome tempo for ' + item +  ' (or disable)';
        } else if (this.props.selectionMenu === 'metronomeSelectionMenuItems') {
          if (item === 'Metronome Off') {
            return 'turn ' + item + ' for ' + this.state.padSelectingFor;
          } else {
            return 'set metronome tempo for ' + this.state.padSelectingFor + ':' + item.split(':')[1] + ' BPM';
          }
        }
      }
    }
  };

  handleBackNav() {
    if (this.props.selectionMenu === 'pads') {
      this.backToDrumPad();
    } else {
      if (this.props.drumPadGrid === 'selectionMenu') {
        if (this.props.selectionMenu === 'firstDirMenu') {
          this.props.setSelectionMenuAction('pads');
        } else if (this.props.selectionMenu === 'secondDirMenu') {
          this.props.setSelectionMenuAction('firstDirMenu');
        } else if (this.props.selectionMenu === 'thirdDirMenu') {
          this.props.setSelectionMenuAction('secondDirMenu');
        } else if (this.props.selectionMenu === 'thirdDirMenu') {
          this.props.setSelectionMenuAction('secondDirMenu');
        } else if (this.props.selectionMenu === 'fourthDirMenu') {
          this.props.setSelectionMenuAction('thirdDirMenu');
        }
      } else {
        this.props.setSelectionMenuAction('pads');
        this.setState({ padSelectingFor: '', });
      }
    }
  };

  backToDrumPad() {
    this.setState({
      fileStringArray: [],
      padSelectingFor: '',
    });
    this.props.setDrumPadGridAction('drumPadGrid');
  };

  handleEscKey(event) {
    if (event.keyCode === 27) {
      this.handleClick('( cancel -- back )');
    }
  };

  handleMouseOver(item) {
    let menuToolTip = document.createElement('div');
    menuToolTip.setAttribute('id','menuToolTip');
    menuToolTip.textContent = this.makeMenuToolTipText(item);
    document.getElementById('display-bottom').appendChild(menuToolTip);
  };

  handleMouseOut() {
    let menuToolTip = document.getElementById('menuToolTip');
    if (menuToolTip) {
      menuToolTip.parentNode.removeChild(menuToolTip);
    }
  };

  componentDidMount() {
    document.addEventListener("keyup",this.handleEscKey,false);
    document.getElementById(this.props.drumPadGrid).tabIndex = '0';
    document.getElementById(this.props.drumPadGrid).focus();
    if (!document.getElementById('menuScrollTip')) {
      let menuScrollTip = document.createElement('p');
      menuScrollTip.setAttribute('id','menuScrollTip');
      menuScrollTip.textContent = ('scroll menu with arrow keys or PgUpDn, "esc" key to go back');
      document.getElementById('display-top').appendChild(menuScrollTip);
    }
  };

  componentWillUnmount() {
    document.removeEventListener("keyup",this.handleEscKey,false);
    let menuScrollTip = document.getElementById('menuScrollTip');
    if (menuScrollTip) {
      menuScrollTip.parentNode.removeChild(menuScrollTip);
    }
  };

  componentDidUpdate(prevProps) {
    if (this.props.drumPadGrid === 'selectionMenu') {
      if ((prevProps.selectionMenu === 'secondDirMenu') && (this.props.selectionMenu === 'firstDirMenu')) {
        this.setState({
          fileStringArray: [],
        });
      } else if ((prevProps.selectionMenu === 'thirdDirMenu') && (this.props.selectionMenu === 'secondDirMenu')) {
        this.setState(state => {
          return { fileStringArray: [state.fileStringArray[0],] }
        });
      } else if ((prevProps.selectionMenu === 'fourthDirMenu') && (this.props.selectionMenu === 'thirdDirMenu')) {
        this.setState(state => {
          return { fileStringArray: [state.fileStringArray[0],state.fileStringArray[1]] }
        });
      }
    }
  };

  handleClick(item) {
    if (item === '( cancel -- back )') {
      this.handleBackNav();
    } else {
      if (this.props.drumPadGrid === 'selectionMenu') {
        if (this.props.selectionMenu === 'pads') {
          this.setState({
            fileStringArray: [],
            padSelectingFor: item,
          });
          this.props.setSelectionMenuAction('firstDirMenu');
        } else if (this.props.selectionMenu === 'firstDirMenu') {
          this.setState({
            fileStringArray: [item,],
          });
          this.props.setSelectionMenuAction('secondDirMenu');
        } else if (this.props.selectionMenu === 'secondDirMenu') {
          this.setState(state => {
            return { fileStringArray: [state.fileStringArray[0],item] }
          });
          this.props.setSelectionMenuAction('thirdDirMenu');
        } else if (this.props.selectionMenu === 'thirdDirMenu') {
          if (item.substring(item.length - 4) === '.wav') {
            const sample = this.state.fileStringArray.join('/') + '/' + item;
            sessionStorage.setItem(this.state.padSelectingFor,sample);
            this.props.shouldMetronomeRestartAction(this.state.padSelectingFor,true);
            this.backToDrumPad();
          } else {
            this.setState(state => {
              return { fileStringArray: [...state.fileStringArray,item] }
            });
            this.props.setSelectionMenuAction('fourthDirMenu');
          }
        } else if (this.props.selectionMenu === 'fourthDirMenu') {
          const sample = this.state.fileStringArray.join('/') + '/' + item;
          sessionStorage.setItem(this.state.padSelectingFor,sample);
          this.props.shouldMetronomeRestartAction(this.state.padSelectingFor,true);
          this.backToDrumPad();
        }
      } else if (this.props.drumPadGrid === 'volumeSelectionMenu') {
        if (this.props.selectionMenu === 'pads') {
          this.setState({ padSelectingFor: item, });
          this.props.setSelectionMenuAction('volumeSelectionMenuItems');
        } else if (this.props.selectionMenu === 'volumeSelectionMenuItems') {
          sessionStorage.setItem(this.state.padSelectingFor + 'volume',item);
          this.backToDrumPad();
        } 
      } else if (this.props.drumPadGrid === 'metronomeSelectionMenu') {
        if (this.props.selectionMenu === 'pads') {
          this.setState({ padSelectingFor: item, });
          this.props.setSelectionMenuAction('metronomeSelectionMenuItems');
        } else if (this.props.selectionMenu === 'metronomeSelectionMenuItems') {
          if (item === 'Metronome Off') {
            sessionStorage.setItem(this.state.padSelectingFor + 'isMetronome',false);
            this.props.toggleMetronomeIsPlayingAction(this.state.padSelectingFor,false);
            this.backToDrumPad();
          } else {
            sessionStorage.setItem(this.state.padSelectingFor + 'isMetronome',true);
            const tempo = Math.round(60000 / parseInt(item.split(': ')[1]));
            sessionStorage.setItem(this.state.padSelectingFor + 'metronomeTempo',tempo);
            this.props.setMetronomeTempoAction(this.state.padSelectingFor,tempo);
            this.backToDrumPad();
          }
        } 
      }
    }
    this.handleMouseOut();
  };

  render() {
    const makeSelectionMenuItem = (item) => {
      return (
        <div
          key={this.props.drumPadGrid + this.props.selectionMenu + item}
          className="selectionMenuItem"
          onMouseEnter={(event) => this.handleMouseOver(item)}
          onMouseLeave={(event) => this.handleMouseOut()}
          onClick={() => this.handleClick(item)}
        >
          {item}
        </div>
      );
    };

    const makeSelectionMenu = (menuItems) => {
      let resultItems = menuItems.map(item => item);
      resultItems.unshift('( cancel -- back )')
      return resultItems.map(item => makeSelectionMenuItem(item));
    };

    if (this.props.drumPadGrid === 'selectionMenu') {
      return(
        <div id="selectionMenu" className="selectionMenu">
          { this.props.selectionMenu === 'pads' && makeSelectionMenu(padsArray) }
          { this.props.selectionMenu === 'firstDirMenu' && makeSelectionMenu(Object.keys(wavFiles)) }
          { this.props.selectionMenu === 'secondDirMenu' && makeSelectionMenu(Object.keys(wavFiles[this.state.fileStringArray[0]])) }
          { this.props.selectionMenu === 'thirdDirMenu' &&  makeSelectionMenu((() => {
            const menuItems = wavFiles[this.state.fileStringArray[0]][this.state.fileStringArray[1]]
              .filter(item => typeof item === 'string');
            if (!(typeof wavFiles[this.state.fileStringArray[0]][this.state.fileStringArray[1]][0] === 'string')) {
              const moreDirs = Object.keys(wavFiles[this.state.fileStringArray[0]][this.state.fileStringArray[1]][0]);
              moreDirs.forEach(item => menuItems.push(item));
            }
            return menuItems;
          })()) }
          { this.props.selectionMenu === 'fourthDirMenu' && makeSelectionMenu(wavFiles[this.state.fileStringArray[0]][this.state.fileStringArray[1]][0][this.state.fileStringArray[2]]) }
        </div>
      );
    } else if (this.props.drumPadGrid === 'volumeSelectionMenu') {
      return(
        <div id="volumeSelectionMenu" className="selectionMenu">
          { this.props.selectionMenu === 'pads' && makeSelectionMenu(padsArray) }
          { this.props.selectionMenu === 'volumeSelectionMenuItems' && makeSelectionMenu(volumeSelectionMenuItems) }
        </div>
      );
    } else if (this.props.drumPadGrid === 'metronomeSelectionMenu') {
      return(
        <div id="metronomeSelectionMenu" className="selectionMenu">
          { this.props.selectionMenu === 'pads' && makeSelectionMenu(padsArray) }
          { this.props.selectionMenu === 'metronomeSelectionMenuItems' && makeSelectionMenu((() => {
            const tempos = Object.keys(metronomeTempos).map(item  => {
              const keyItems = item.split(' ');
              if (keyItems.length === 3) {
                return keyItems[0] + ' ' + keyItems[1] + ': ' + metronomeTempos[item].slice(0,-4);
              } else {
                return keyItems[0] + ': ' + metronomeTempos[item].slice(0,-4);
              }
            });
            tempos.unshift('Metronome Off');
            return tempos;
          })()) }
        </div>
      );
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectionMenu);
