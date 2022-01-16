import React, { Component } from 'react';
import Button from './Button';

class Input extends Component {
  render() {
    const {
      counter,
      extraInputName,
      handleOnChange,
      inputValue,
      name,
      placeHolder,
      removeExtraInput,
      type,
      formName,
    } = this.props;

    // Conditionally renders an input field or a textarea
    return (
      <div>
        {type === 'input' ? (
          <input
            onChange={(e) => handleOnChange(e, name)}
            placeholder={placeHolder}
            value={inputValue}
          />
        ) : (
          <textarea
            onChange={(e) => handleOnChange(e, name)}
            placeholder={placeHolder}
            value={inputValue}
          />
        )}
        {removeExtraInput && counter.length > 1 ? (
          <Button
            onClick={() => removeExtraInput(name, formName)}
            text={`Remove ${extraInputName}`}
          />
        ) : null}
      </div>
    );
  }
}

export default Input;
