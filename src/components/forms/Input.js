import React, { Component } from 'react';

class Input extends Component {
  render() {
    const { placeHolder, inputValue, name } = this.props;

    return (
      <input
        value={inputValue}
        onChange={(e) => this.props.handleOnChange(e, name)}
        placeholder={placeHolder}
      />
    );
  }
}

export default Input;
