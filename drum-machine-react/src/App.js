import React from 'react';

import './App.css';
import DrumMachine from "./DrumMachine";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <a href="https://github.com/TrentSPalmer/fcc-challenges/tree/gh-pages/drum-machine-react" className="githubLabel" target="_blank" rel="noopener noreferrer">
          <img src="https://github.blog/wp-content/uploads/2008/12/forkme_right_white_ffffff.png?resize=149%2C149"
               className="attachment-full size-full" alt="Fork me on GitHub" data-recalc-dims="1"></img>
        </a>
        <DrumMachine />
      </div>
    );
  }
}

export default App;
