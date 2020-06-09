import React from 'react';
import { connect } from "react-redux";

import { colors } from './globals'
import DisplayInput from './DisplayInput';
import DisplayOperations from './DisplayOperations';
const mapStateToProps = (state) => ({ ...state });

class Display extends React.Component {
  render() {
    const width = this.props.innerWindowWidth;
    const height = this.props.innerWindowHeight;
    const style = {
      gridColumnStart: 1,
      gridColumnEnd: 7,
      gridRowStart: 1,
      gridRowEnd: 2,
      borderBottom: '3px solid black',
      backgroundColor: colors.textColor,
      borderRadius: '7px 7px 0 0',
      color: colors.firstColor,
      textOverflow: 'clip',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
    };

    if (height > width) {
      style['gridColumnEnd'] = 5;
    }

    return (
      <div style={style}>
        <DisplayOperations />
        <DisplayInput />
      </div>
    );
  };
};

export default connect(mapStateToProps)(Display);
