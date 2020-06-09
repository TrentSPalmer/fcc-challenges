import React from 'react';
import { connect } from "react-redux";

const mapStateToProps = (state) => ({ ...state });

class Minus extends React.Component {
  render() {
    const width = this.props.innerWindowWidth;
    const height = this.props.innerWindowHeight;
    const style = {
      gridColumnStart: 5,
      gridColumnEnd: 6,
      gridRowStart: 3,
      gridRowEnd: 4,
      borderBottom: '3px solid black',
      borderRight: '3px solid black',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    };

    if (height > width) {
      style['gridColumnStart'] = 4;
      style['gridColumnEnd'] = 5;
      style['borderRight'] = 'unset';
    }

    return (
      <div id="minus" style={style}>-</div>
    );
  };
};

export default connect(mapStateToProps)(Minus);
