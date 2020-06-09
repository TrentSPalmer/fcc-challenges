import React from 'react';
import { connect } from "react-redux";

import { colors,makeInputAndOperationsStrings } from './globals'
import { inputStringAction } from "./actions/inputStringAction";
import { operationStringAction } from "./actions/operationStringAction";

const mapStateToProps = (state) => ({ ...state });

const mapDispatchToProps = (dispatch) => ({
  inputStringAction: (inputString) => dispatch(inputStringAction(inputString)),
  operationStringAction: (operationString) => dispatch(operationStringAction(operationString)),
});

class Equals extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleMouseEvent = this.handleMouseEvent.bind(this);
    this.state = {
      backgroundColor: colors.thirdColor,
    };
  };

  handleClick() {
    const [inputString,operationString] = makeInputAndOperationsStrings(this.props.inputString,this.props.operationString,'=');
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
      this.setState({backgroundColor: colors.thirdColor});
    }
  }

  render() {
    const width = this.props.innerWindowWidth;
    const height = this.props.innerWindowHeight;
    const style = {
      gridColumnStart: 6,
      gridColumnEnd: 7,
      gridRowStart: 4,
      gridRowEnd: 5,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: this.state.backgroundColor,
      borderRadius: '0 0 7px 0',
      fontSize: 88,
    };

    if (width > height && height < 400) {
      style['fontSize'] = 56;
    } else if (height > width) {
      style['gridColumnStart'] = 4;
      style['gridColumnEnd'] = 5;
      style['gridRowStart'] = 5;
      style['gridRowEnd'] = 7;
    }

    return (
      <div id="equals" style={style} className='clickable' onClick={this.handleClick}
        onTouchStart={this.handleMouseEvent} onTouchEnd={this.handleMouseEvent}
        onMouseDown={this.handleMouseEvent} onMouseUp={this.handleMouseEvent}>=</div>
    );
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Equals);
