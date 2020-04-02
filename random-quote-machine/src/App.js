import React from "react";
import { connect } from "react-redux";

import "./App.css";
import QuoteBox from "./QuoteBox";

const mapStateToProps = (state) => ({ ...state });

class App extends React.Component {
  render() {
    const colors = ["red-background", "blue-background", "yellow-background"];
    const appHeaderClass = "App-header " + colors[this.props.colorCount];
    return (
      <div className="App">
        <header className={appHeaderClass}>
          <QuoteBox />
        </header>
      </div>
    );
  }
}

export default connect(mapStateToProps)(App);
