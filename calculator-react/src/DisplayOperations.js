import React from 'react';
import { connect } from "react-redux";
import { colors } from './globals'

const mapStateToProps = (state) => ({ ...state });

class DisplayOperations extends React.Component {
  render() {
    const width = this.props.innerWindowWidth;
    const height = this.props.innerWindowHeight;
    const style = {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      textAlign: 'right',
      height: '40%',
      fontSize: 48,
      lineHeight: '100%',
      color: colors.secondtextColor,
    };

    if (width > height && height < 400) {
      style['fontSize'] = 27;
    } else if (height > width && height < 850) {
      style['fontSize'] = 27;
    }

    return (
      <div id="displayOperations" style={style}>{
        this.props.operationString.length === 0 ? 0 : this.props.operationString
      }</div>
    );
  };
};

export default connect(mapStateToProps)(DisplayOperations);
