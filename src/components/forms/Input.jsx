import Button from './Button';
import React, { Component } from 'react';

class Input extends Component {
  render() {
    const {
      counter,
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
    let inputMode = '';
    if (['Phone Number'].includes(placeHolder)) {
      inputMode = 'tel';
    } else if (['Email'].includes(placeHolder)) {
      inputMode = 'email';
    } else if (['Website'].includes(placeHolder)) {
      inputMode = 'url';
    } else {
      inputMode = 'text';
    }
    // Conditionally renders an input field or a textarea
    return (
      <div className={extraInputClassName}>
        {type === 'input' ? (
          <input
            onChange={(e) => handleOnChange(e, name)}
            placeholder={placeHolder}
            value={inputValue}
            inputMode={inputMode}
          />
        ) : (
          <textarea
            onChange={(e) => handleOnChange(e, name)}
            placeholder={placeHolder}
            value={inputValue}
            inputMode={inputMode}
          />
        )}
        {moreThanOneExtraInput ? (
          <Button
            onClick={() => removeExtraInput(name, formName)}
            text={`X`}
            noFocus={true}
          />
        ) : null}
      </div>
    );
  }
}

export default Input;
