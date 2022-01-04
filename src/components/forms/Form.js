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
    this.setState((state) => {
      return {
        ...state,
        formFields: {
          ...state.formFields,
          [field]: {
            ...state.formFields[field],
            inputValue: e.target.value,
          },
        },
      };
    });
  }

  render() {
    const { formFields, formTitle, formType } = this.state;
    const { formId, addForm, onFormSave, removeForm } = this.props;
    const inputs = Object.keys(formFields).map((inputName) => {
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
        <form onSubmit={(e) => onFormSave(e, formType, formId, formFields)}>
          {inputs}
          {addForm ? (
            <Button onClick={() => addForm(formType)} text={'Add Form'} />
          ) : null}
          <Button
            onClick={() => removeForm(formType, formId)}
            text={'Remove Form'}
          />
          <button type="submit">Save</button>
        </form>
      </div>
    );
  }
}

export default Form;
