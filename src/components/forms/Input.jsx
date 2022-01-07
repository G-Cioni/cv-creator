import React, { Component} from 'react';
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
      extraInputName,
      counter
    } = this.props;

    // Conditionally renders an input field or a textarea
    return (
      <div>
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
        {removeExtraInput && counter.length > 1 ? (
          <Button
            onClick={() => removeExtraInput(name, inputId)}
            text={`Remove ${extraInputName}`}
          />
        ) : null}
      </div>
    );
  }
}

export default Input;
