import React from "react";
import { connect } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

import "./TweetQuote.css";

const mapStateToProps = state => ({ ...state });

class TweetQuote extends React.Component {
  render() {
    const colors = ["red-background", "blue-background", "yellow-background"];
    const tweetQuoteClass = "TweetQuote " + colors[this.props.colorCount];
    let href = "https://twitter.com/intent/tweet?text=";
    if (typeof this.props.newQuote.quote === "object") {
      href += encodeURIComponent(
        this.props.newQuote.quote.quote +
          "\n--" +
          this.props.newQuote.quote.author
      );
    }
    return (
      <div className={tweetQuoteClass}>
        <a href={href} target="_blank" rel="noopener noreferrer" id="tweet-quote">
          <FontAwesomeIcon icon={faTwitter} className={colors[this.props.colorCount]}/>
        </a>
      </div>
    );
  }
}

export default connect(mapStateToProps)(TweetQuote);
