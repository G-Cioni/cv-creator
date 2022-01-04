import React, { Component } from 'react';

class Button extends Component {
  render() {
    const { onFormSave, text } = this.props;
    return <button onClick={onFormSave}>{text}</button>;
  }
}

export default Button;
