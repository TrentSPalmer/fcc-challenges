import React from 'react';
import { connect } from "react-redux";

import PomodoroClock from './PomodoroClock';

import { colors } from './globals'

import { innerWindowWidthAction } from "./actions/innerWindowWidthAction";
import { innerWindowHeightAction } from "./actions/innerWindowHeightAction";

const mapStateToProps = (state) => ({ ...state });

const mapDispatchToProps = (dispatch) => ({
  innerWindowWidthAction: (windowInnerWidth) => dispatch(innerWindowWidthAction(windowInnerWidth)),
  innerWindowHeightAction: (windowInnerHeight) => dispatch(innerWindowHeightAction(windowInnerHeight)),
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleResize = this.handleResize.bind(this);
  };

  handleResize() {
    this.props.innerWindowWidthAction(window.innerWidth);
    this.props.innerWindowHeightAction(window.innerHeight);
  };

  componentDidMount() {
    window.addEventListener('resize',this.handleResize);
  };

  componentWillUnmount() {
    window.removeEventListener('resize',this.handleResize);
  };

  render() {
    const height = this.props.innerWindowHeight;
    const width = this.props.innerWindowWidth;
    const gitHubLabelStyle = {
      backgroundColor: colors.prussianBlue,
      border: 'none',
      width: 149,
      height: 0,
      position: 'absolute',
      right: 0,
    };

    const attachmentStyle = {
      position: 'absolute',
      right: 0,
      height: 149,
      width: 149,
    };

    const style = {
      textAlign: 'center',
      backgroundColor: colors.prussianBlue,
      height: '100vh',
      width: '100vw',
      display: 'flex',
      flexDirection: 'column',
      color: colors.ivoryBlack,
      overFlow: 'hidden',
      fontFamily: 'Ubuntu sans-serif',
      fontSize: 48,
    };

    if (width > height && height < 400) {
      gitHubLabelStyle['width'] = 99;
      attachmentStyle['width'] = 99;
      attachmentStyle['height'] = 99;
    } else if (height > width) {
      gitHubLabelStyle['width'] = 99;
      attachmentStyle['width'] = 99;
      attachmentStyle['height'] = 99;
    }

    return (
      <div style={style}>
      <a href="https://github.com/TrentSPalmer/fcc-challenges/tree/gh-pages/pomodoro-clock-react"
        style={gitHubLabelStyle}
        target="_blank" rel="noopener noreferrer">
      <img
        src="https://github.blog/wp-content/uploads/2008/12/forkme_right_white_ffffff.png?resize=149%2C149"
        className="size-full"
        style={attachmentStyle}
        alt="Fork me on GitHub"
        data-recalc-dims="1">
      </img>
      </a>
      <PomodoroClock />
      </div>
    );
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
