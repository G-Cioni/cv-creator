import React, { Component } from 'react';

class Button extends Component {
  render() {
    const { noFocus, onClick, text } = this.props;
    return (
      <button onClick={onClick} tabIndex={noFocus ? 1 : 0}>
        {text}
      </button>
    );
  }
}

export default Button;
