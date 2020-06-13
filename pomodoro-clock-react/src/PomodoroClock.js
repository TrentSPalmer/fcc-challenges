import React from 'react';
import { connect } from "react-redux";
import { colors } from './globals'

import Top from './Top';
import Clock from './Clock';
import Controls from './Controls';

const mapStateToProps = (state) => ({ ...state });

class PomodoroClock extends React.Component {
  render() {
    const width = this.props.innerWindowWidth;
    const height = this.props.innerWindowHeight;
    const eightyPercentWidth = Math.round(width * 0.8);
    const eightyPercentHeight = Math.round(height * 0.8);
    const maxHeight = 500;
    const maxWidth = 800;
    const style = {
      margin: 'auto',
      border: '3px solid',
      borderColor: colors.ivoryBlack,
      zIndex: '1',
      backgroundColor: colors.skyBlue,
      borderRadius: 10,
      height: eightyPercentHeight < maxHeight ? eightyPercentHeight : maxHeight,
      width: eightyPercentWidth < maxWidth ? eightyPercentWidth : maxWidth,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      fontSize: 32,
      userSelect: 'none',
      MozUserSelect: 'none',
      WebkitUserSelect: 'none',
    };

    const clockContainerStyle = { 
      height: '100%',
      width: '100%',
    };

    if (width > height && height < 450) {
      style['height'] = '96vh';
      style['width'] = '75vw';
      style['margin'] = '1vh auto 3vh auto';
      style['fontSize'] = 24;
    } else if (height > width) {
      if (height > (maxHeight + 179)) {
        style['margin'] = 'auto';
      } else {
        style['margin'] = '99px 0 80px 0';
      }
      style['height'] = Math.round(height * 0.75);
      style['maxHeight'] = maxHeight;
      clockContainerStyle['height'] = width > style['height'] ? style['height'] : width; 
      clockContainerStyle['maxHeight'] = maxHeight;
      style['width'] = width - 6;
      style['maxWidth'] = maxWidth;
      style['fontSize'] = 24;
    }

    return(
      <div style={style}>
        <div id='clockContainer' style={clockContainerStyle}>
          <Top />
          <Clock />
          <Controls />
        </div>
      </div>
    );
  };
};

export default connect(mapStateToProps)(PomodoroClock);
