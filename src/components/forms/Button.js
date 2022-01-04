import React, { Component } from 'react';

class Button extends Component {
  render() {
    const { text, onClick } = this.props;
    return <button onClick={onClick}>{text}</button>;
  }
}

export default Button;
