import React from "react";
import { connect } from "react-redux";

import "./TextAuthor.css";
import { quoteFetchActionCreator } from "./actions/quoteFetchActionCreator";

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
  quoteFetch: () => dispatch(quoteFetchActionCreator())
});

class TextAuthor extends React.Component {
  componentDidMount() {
    if (this.props.newQuote.quote === "") {
      this.props.quoteFetch();
    }
  }
  render() {
    let quote = "";
    let author = "";
    if (typeof this.props.newQuote.quote === "object") {
      quote = this.props.newQuote.quote.quote;
      author = this.props.newQuote.quote.author;
    }
    const colors = ["red", "blue", "yellow"];
    const textClass = "text " + colors[this.props.colorCount];
    const authorClass = "author " + colors[this.props.colorCount];
    return (
      <div style={{ fontSize: ".7em" }}>
        <p className={textClass} id="text">
          {quote}
        </p>
        <p className={authorClass} id="author">
          --{author}
        </p>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TextAuthor);
