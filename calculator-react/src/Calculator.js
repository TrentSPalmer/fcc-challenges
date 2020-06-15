import React from 'react';
import { connect } from "react-redux";

import { colors,makeInputAndOperationsStrings } from './globals'
import CalculatorGrid from './CalculatorGrid';
import { inputStringAction } from "./actions/inputStringAction";
import { operationStringAction } from "./actions/operationStringAction";

const mapStateToProps = (state) => ({ ...state });

const mapDispatchToProps = (dispatch) => ({
  inputStringAction: (inputString) => dispatch(inputStringAction(inputString)),
  operationStringAction: (operationString) => dispatch(operationStringAction(operationString)),
});

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleKey= this.handleKey.bind(this);
  };

  handleKey(key) {
    const [inputString,operationString] = makeInputAndOperationsStrings(this.props.inputString,this.props.operationString,key);
    if (inputString !== this.props.inputString) {
      this.props.inputStringAction(inputString);
    }
    if (operationString !== this.props.operationString) {
      this.props.operationStringAction(operationString);
    }
  }

  handleKeyPress(e) {
    if (e.keyCode === 8 || e.keyCode === 46) {
      this.handleKey('b');
    } else if (['0','1','2','3','4','5','6','7','8','9','.','*','+','-','='].includes(e.key)) {
      this.handleKey(e.key);
    } else if (e.key === '/') {
      e.preventDefault();
      this.handleKey(e.key);
    } else if (e.keyCode === 13) {
      this.handleKey('=');
    } else if (e.keyCode === 27) {
      this.props.inputStringAction('');
      this.props.operationStringAction('');
    }
  };

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress, false);
  };

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress, false);
  };

  render() {
    const width = this.props.innerWindowWidth;
    const height = this.props.innerWindowHeight;
    const topMargin = Math.round(height * 0.1);
    const sideMargin = Math.round(width * 0.1);
    const style = {
      height: '80%',
      width: '80%',
      backgroundColor: colors.secondColor,
      borderRadius: 10,
      marginTop: topMargin,
      marginBottom: topMargin,
      marginLeft: sideMargin,
      marginRight: sideMargin,
      overFlow: 'hidden',
      border: '3px solid black',
      userSelect: 'none',
      MozUserSelect: 'none',
      WebkitUserSelect: 'none',
      zIndex: '1',
      fontFamily: 'Baloo Bhai',
    };

    if (width > height && height < 400) {
      style['height'] = '96vh';
      style['width'] = '80vw';
      style['marginTop'] = '1vh';
      style['marginBottom'] = '3vh';
      style['marginLeft'] = '89px';
      style['marginRight'] = '89px';
    } else if (height > width) {
      style['height'] = '75vh';
      style['minHeight'] = 481;
      style['width'] = '100vw';
      style['marginTop'] = '12vh';
      style['marginBottom'] = 'unset';
      style['marginLeft'] = '0px';
      style['marginRight'] = '0px';
    }

    return (
      <div id="Calculator" style={style}>
        <CalculatorGrid />
      </div>
    );
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);
