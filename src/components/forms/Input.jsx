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

    const moreThanOneExtraInput = removeExtraInput && counter.length > 1;
    const extraInputClassName = moreThanOneExtraInput
      ? 'inputWithRemoveBtn'
      : null;
    // Conditionally renders an input field or a textarea
    return (
      <div className={extraInputClassName}>
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
        {moreThanOneExtraInput ? (
          <Button onClick={() => removeExtraInput(name, formName)} text={`X`} />
        ) : null}
      </div>
    );
  }
}

export default Input;
