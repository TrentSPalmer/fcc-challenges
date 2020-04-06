import React from "react";
import { connect } from "react-redux";

import "./NewQuote.css";

import { colorCounterAction } from "./actions/colorCounterAction";
import { quoteFetchActionCreator } from "./actions/quoteFetchActionCreator";

const mapStateToProps = (state) => ({ ...state });

const mapDispatchToProps = (dispatch) => ({
  colorCounterAction: (count) => dispatch(colorCounterAction(count)),
  quoteFetch: () => dispatch(quoteFetchActionCreator()),
});

class NewQuote extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.colorCounterAction(
      this.props.colorCount > 1 ? 0 : this.props.colorCount + 1
    );
    this.props.quoteFetch();
  }

  render() {
    const colors = ["red-background", "blue-background", "yellow-background"];
    const newQuoteClass = "NewQuote " + colors[this.props.colorCount];
    return (
      <button onClick={this.handleClick} className={newQuoteClass} id="new-quote">
        Click Me!
      </button>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewQuote);
