import React, { Component, Fragment } from 'react';
import Button from './Button';

class Input extends Component {
  render() {
    const {
      handleOnChange,
      placeHolder,
      inputValue,
      name,
      type,
      removeExtraInput,
      inputId,
      parentFormType,
    } = this.props;

    // Assigns the extra input fields name based on it's context
    const extraInputName =
      parentFormType === 'workExperiences'
        ? 'Work Duty'
        : parentFormType === 'skills'
        ? 'Skill'
        : 'Certificate';
    // Conditionally renders an input field or a textarea
    return (
      <Fragment>
        {type === 'input' ? (
          <input
            value={inputValue}
            onChange={(e) => handleOnChange(e, name)}
            placeholder={placeHolder}
          />
        ) : (
          <textarea
            value={inputValue}
            onChange={(e) => handleOnChange(e, name)}
            placeholder={placeHolder}
          />
        )}
        {removeExtraInput ? (
          <Button
            onClick={() => removeExtraInput(name, inputId)}
            text={`Remove ${extraInputName}`}
          />
        ) : null}
      </Fragment>
    );
  }
}

export default Input;
