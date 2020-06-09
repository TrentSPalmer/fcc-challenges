import React from 'react';
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackspace } from "@fortawesome/free-solid-svg-icons";

import { colors,makeInputAndOperationsStrings } from './globals'
import { inputStringAction } from "./actions/inputStringAction";
import { operationStringAction } from "./actions/operationStringAction";

const mapStateToProps = (state) => ({ ...state });

const mapDispatchToProps = (dispatch) => ({
  inputStringAction: (inputString) => dispatch(inputStringAction(inputString)),
  operationStringAction: (operationString) => dispatch(operationStringAction(operationString)),
});

class Back extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleMouseEvent = this.handleMouseEvent.bind(this);
    this.state = {
      backgroundColor: colors.fourthColor,
    };
  };

  handleClick() {
    const [inputString,operationString] = makeInputAndOperationsStrings(this.props.inputString,this.props.operationString,'b');
    if (inputString !== this.props.inputString) {
      this.props.inputStringAction(inputString);
    }
    if (operationString !== this.props.operationString) {
      this.props.operationStringAction(operationString);
    }
  }

  handleMouseEvent(e) {
    if (e.type === 'mousedown' || e.type === 'touchstart') {
      this.setState({backgroundColor: colors.firstColor});
    } else if (e.type === 'mouseup' || e.type === 'touchend') {
      this.setState({backgroundColor: colors.fourthColor});
    }
  }

  render() {
    const width = this.props.innerWindowWidth;
    const height = this.props.innerWindowHeight;
    const style = {
      gridColumnStart: 6,
      gridColumnEnd: 7,
      gridRowStart: 3,
      gridRowEnd: 4,
      borderBottom: '3px solid black',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: this.state.backgroundColor,
    };

    if (height > width) {
      style['gridRowStart'] = 2;
      style['gridRowEnd'] = 3;
      style['gridColumnStart'] = 2;
      style['gridColumnEnd'] = 3;
      style['borderRight'] = '3px solid black';
    }

    return (
      <div id="subtract" style={style} className='clickable' onClick={this.handleClick}
        onTouchStart={this.handleMouseEvent} onTouchEnd={this.handleMouseEvent}
        onMouseDown={this.handleMouseEvent} onMouseUp={this.handleMouseEvent}>
        <FontAwesomeIcon icon={faBackspace}/>
      </div>
    );
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Back);
