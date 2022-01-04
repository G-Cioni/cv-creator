import React, { Component } from 'react';
import Input from './Input';
import Button from './Button';
import uniqid from 'uniqid';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.props.formData,
      extraInputCounter: [uniqid(), uniqid()],
    };
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

  componentDidMount() {
    let inputName;
    let inputPlaceholder;
    let inputType;
    switch (!inputName && !inputPlaceholder && !inputType) {
      case this.state.formType === 'workExperiences':
        inputName = 'workDuty';
        inputPlaceholder = 'Work Duty';
        inputType = 'textarea';
        break;
      case this.state.formType === 'skills':
        inputName = 'skill';
        inputPlaceholder = 'Skill';
        inputType = 'input';
        break;
      case this.state.formType === 'certificates':
        inputName = 'certificate';
        inputPlaceholder = 'Certificate';
        inputType = 'input';
        break;
      default:
        inputName = '';
        inputPlaceholder = '';
        inputType = '';
        break;
    }
    const extraInputs = this.state.extraInputCounter.reduce(
      (accumulator, id) => {
        accumulator = {
          ...accumulator,
          [`${inputName}-${id}`]: {
            id,
            inputValue: '',
            name: `${inputName}-${id}`,
            placeHolder: inputPlaceholder,
            type: inputType,
          },
        };
        return accumulator;
      },
      {},
    );

    this.setState((state) => {
      return {
        ...state,
        formFields: {
          ...state.formFields,
          ...extraInputs,
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
