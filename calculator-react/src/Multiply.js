import React from 'react';
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import { colors,makeInputAndOperationsStrings } from './globals'
import { inputStringAction } from "./actions/inputStringAction";
import { operationStringAction } from "./actions/operationStringAction";

const mapStateToProps = (state) => ({ ...state });

const mapDispatchToProps = (dispatch) => ({
  inputStringAction: (inputString) => dispatch(inputStringAction(inputString)),
  operationStringAction: (operationString) => dispatch(operationStringAction(operationString)),
});

class Multiply extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleMouseEvent = this.handleMouseEvent.bind(this);
    this.state = {
      backgroundColor: colors.fourthColor,
    };
  };

  handleClick() {
    const [inputString,operationString] = makeInputAndOperationsStrings(this.props.inputString,this.props.operationString,'*');
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
      gridRowStart: 2,
      gridRowEnd: 3,
      borderBottom: '3px solid black',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: this.state.backgroundColor,
    };

    if (height > width) {
      style['gridColumnStart'] = 4;
      style['gridColumnEnd'] = 5;
    }

    return (
      <div id="multiply" style={style} className='clickable' onClick={this.handleClick}
        onTouchStart={this.handleMouseEvent} onTouchEnd={this.handleMouseEvent}
        onMouseDown={this.handleMouseEvent} onMouseUp={this.handleMouseEvent}>
        <FontAwesomeIcon icon={faTimes}/>
      </div>
    );
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Multiply);
