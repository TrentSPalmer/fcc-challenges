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

class One extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleMouseEvent = this.handleMouseEvent.bind(this);
    this.state = {
      backgroundColor: colors.secondColor,
    };
  };

  handleClick() {
    const [inputString,operationString] = makeInputAndOperationsStrings(this.props.inputString,this.props.operationString,'1');
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
      this.setState({backgroundColor: colors.secondColor});
    }
  }

  render() {
    const width = this.props.innerWindowWidth;
    const height = this.props.innerWindowHeight;
    const style = {
      gridColumnStart: 2,
      gridColumnEnd: 3,
      gridRowStart: 4,
      gridRowEnd: 5,
      borderRight: '3px solid black',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      backgroundColor: this.state.backgroundColor,
    };

    if (height > width) {
      style['gridRowStart'] = 5;
      style['gridRowEnd'] = 6;
      style['borderBottom'] = '3px solid black';
      style['gridColumnStart'] = 1;
      style['gridColumnEnd'] = 2;
    }

    return (
      <div id="one" style={style} className='clickable' onClick={this.handleClick}
        onTouchStart={this.handleMouseEvent} onTouchEnd={this.handleMouseEvent}
        onMouseDown={this.handleMouseEvent} onMouseUp={this.handleMouseEvent}>1</div>
    );
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(One);
