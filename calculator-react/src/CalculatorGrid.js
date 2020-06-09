import React from 'react';
import { connect } from "react-redux";

import Seven from './Seven';
import Eight from './Eight';
import Nine from './Nine';
import Four from './Four';
import Five from './Five';
import Six from './Six';
import One from './One';
import Two from './Two';
import Three from './Three';
import Zero from './Zero';
import Decimal from './Decimal';
import Clear from './Clear';
import Divide from './Divide';
import Multiply from './Multiply';
import Subtract from './Subtract';
import Add from './Add';
import Equals from './Equals';
import Display from './Display';
import Back from './Back';
const mapStateToProps = (state) => ({ ...state });

class CalculatorGrid extends React.Component {
  render() {
    const width = this.props.innerWindowWidth;
    const height = this.props.innerWindowHeight;
    const style = {
      display: 'grid',
      width: '100%',
      height: '100%',
      gridTemplateRows: 'repeat(4, 1fr)',
      gridTemplateColumns: 'repeat(6, 1fr)',
      fontSize: 64,
    };

    if (width > height && height < 400) {
      style['fontSize'] = 48;
    } else if (height > width) {
      style['gridTemplateRows'] = 'repeat(6, 1fr)';
      style['gridTemplateColumns'] = 'repeat(4, 1fr)';
      style['fontSize'] = 48;
    }

    return (
      <div id="CalculatorGrid" style={style}>
        <Seven />
        <Eight />
        <Nine />
        <Four />
        <Five />
        <Six />
        <One />
        <Two />
        <Three />
        <Zero />
        <Decimal />
        <Clear />
        <Divide />
        <Multiply />
        <Subtract />
        <Add />
        <Equals />
        <Display />
        <Back />
      </div>
    );
  };
};

export default connect(mapStateToProps)(CalculatorGrid);
