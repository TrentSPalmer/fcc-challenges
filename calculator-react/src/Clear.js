import React from 'react';
import { connect } from "react-redux";

import { colors } from './globals'
import { inputStringAction } from "./actions/inputStringAction";
import { operationStringAction } from "./actions/operationStringAction";

const mapStateToProps = (state) => ({ ...state });

const mapDispatchToProps = (dispatch) => ({
  inputStringAction: (inputString) => dispatch(inputStringAction(inputString)),
  operationStringAction: (operationString) => dispatch(operationStringAction(operationString)),
});

class Clear extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleMouseEvent = this.handleMouseEvent.bind(this);
    this.state = {
      backgroundColor: colors.fifthColor,
    };
  };

  handleClick() {
    this.props.inputStringAction('');
    this.props.operationStringAction('');
  }

  handleMouseEvent(e) {
    if (e.type === 'mousedown' || e.type === 'touchstart') {
      this.setState({backgroundColor: colors.secondColor});
    } else if (e.type === 'mouseup' || e.type === 'touchend') {
      this.setState({backgroundColor: colors.fifthColor});
    }
  }

  render() {
    const style = {
      gridColumnStart: 1,
      gridColumnEnd: 2,
      gridRowStart: 2,
      gridRowEnd: 3,
      borderRight: '3px solid black',
      borderBottom: '3px solid black',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      backgroundColor: this.state.backgroundColor, 
    };

    return (
      <div id="clear" style={style} className='clickable' onClick={this.handleClick}
        onTouchStart={this.handleMouseEvent} onTouchEnd={this.handleMouseEvent}
        onMouseDown={this.handleMouseEvent} onMouseUp={this.handleMouseEvent}>AC</div>
    );
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Clear);
