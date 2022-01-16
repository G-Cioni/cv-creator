import Button from './Button';
import React, { Component } from 'react';

class Input extends Component {
  render() {
    const {
      counter,
      extraInputName,
      formName,
      handleOnChange,
      inputValue,
      name,
      placeHolder,
      removeExtraInput,
      type,
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
