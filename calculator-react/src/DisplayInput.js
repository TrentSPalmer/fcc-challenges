import React from 'react';
import { connect } from "react-redux";

const mapStateToProps = (state) => ({ ...state });

class DisplayInput extends React.Component {
  render() {
    const width = this.props.innerWindowWidth;
    const height = this.props.innerWindowHeight;
    const style = {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      textAlign: 'right',
      height: '60%',
      fontSize: 64,
      lineHeight: '100%',
    };

    if (width > height && height < 400) {
      style['fontSize'] = 36;
    } else if (height > width && height < 850) {
      style['fontSize'] = 36;
    }

    return (
      <div id="display" style={style}>{
        this.props.inputString.length === 0 ? 0 : this.props.inputString
      }</div>
    );
  };
};

export default connect(mapStateToProps)(DisplayInput);
