import React, { Component } from 'react';
import Input from './Input';
import Button from './Button';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.formData;
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(e, field) {
    this.setState({
      ...this.state,
      formFields: {
        ...this.state.formFields,
        [field]: {
          ...this.state.formFields[field],
          inputValue: e.target.value,
        },
      },
    });
  }

  render() {
    const { formFields, formTitle, formType } = this.state;
    const { formId } = this.props;
    const inputs = Object.keys(this.state.formFields).map((inputName) => {
      const { id, placeHolder, name, inputValue, type } = formFields[inputName];
      return (
        <Input
          key={id}
          type={type}
          placeHolder={placeHolder}
          name={name}
          inputValue={inputValue}
          handleOnChange={this.onInputChange}
        />
      );
    });
    return (
      <div className="form">
        <h1>{formTitle}</h1>
        <form
          onSubmit={(e) =>
            this.props.onFormSave(e, formType, formId, formFields)
          }
        >
          {inputs}
          <Button text={'Save'} />
        </form>
      </div>
    );
  }
}

export default Form;
