import React from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExpand } from "@fortawesome/free-solid-svg-icons";

class FullScreen extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  };

  handleClick(e) {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      if (document.exitFullscreen){
        document.exitFullscreen();
      }
    }
  }

  render() {
    const expandIconStyle = {
      position: 'fixed',
      fontSize: 32,
      bottom: 10,
      right: 10,
    }

    return(
      <div>
          <FontAwesomeIcon icon={faExpand} style={expandIconStyle} onClick={this.handleClick}/>
      </div>
    );
  };
};

export default FullScreen;
