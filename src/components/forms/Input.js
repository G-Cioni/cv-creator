import React, { Component } from 'react';

class Input extends Component {
  render() {
    const { placeHolder, inputValue, name, type } = this.props;
    return type === 'input' ? (
      <input
        value={inputValue}
        onChange={(e) => this.props.handleOnChange(e, name)}
        placeholder={placeHolder}
      />
    ) : (
      <textarea
        value={inputValue}
        onChange={(e) => this.props.handleOnChange(e, name)}
        placeholder={placeHolder}
      />
    );
  }
}

export default Input;
