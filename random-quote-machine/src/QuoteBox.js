import React from "react";
import { connect } from "react-redux";

import "./QuoteBox.css";
import NewQuote from "./NewQuote";
import TweetQuote from "./TweetQuote";
import TextAuthor from "./TextAuthor";

const mapStateToProps = (state) => ({ ...state });

class QuoteBox extends React.Component {
  render() {
    const colors = [
      "red-complimentary-background",
      "blue-complimentary-background",
      "yellow-complimentary-background",
    ];
    const quoteBoxClass = "QuoteBox " + colors[this.props.colorCount];
    return (
      <div className={quoteBoxClass} id="quote-box">
        <div className="quote-box-top">
          <TextAuthor />
        </div>
        <div className="quote-box-bottom">
          <div className="quote-box-bottom-left">
            <TweetQuote />
          </div>
          <div className="quote-box-bottom-right">
            <NewQuote />
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(QuoteBox);
