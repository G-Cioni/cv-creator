import React, { Component } from 'react';
import Input from './Input';
import Button from './Button';
import uniqid from 'uniqid';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.props.formData,
      extraInputsCounter: [],
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.addExtraInput = this.addExtraInput.bind(this);
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

  addExtraInput() {
    const { hasExtraInputs } = this.props;

    let { formType, extraInputsCounter } = this.state;
    const newCounter = extraInputsCounter.concat(uniqid());

    if (hasExtraInputs) {
      let extraInputs = [];

      let inputName;
      let inputPlaceholder;
      let inputType;

      switch (!(inputName || inputPlaceholder || inputType)) {
        case formType === 'workExperiences':
          inputName = 'workDuty';
          inputPlaceholder = 'Work Duty';
          inputType = 'textarea';
          break;
        case formType === 'skills':
          inputName = 'skill';
          inputPlaceholder = 'Skill';
          inputType = 'input';
          break;
        case formType === 'certificates':
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

      extraInputs = newCounter.reduce((accumulator, id) => {
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
      }, {});

      this.setState((state) => {
        return {
          ...state,
          formFields: {
            ...state.formFields,
            ...extraInputs,
          },
          extraInputsCounter: newCounter,
        };
      });
    }
  }

  componentDidMount() {
    this.addExtraInput();
  }

  render() {
    const { formFields, formTitle, formType } = this.state;
    const { formId, addForm, onFormSave, removeForm, hasExtraInputs } =
      this.props;

    const extraInputName =
      formType === 'workExperiences'
        ? 'Work Duty'
        : formType === 'skills'
        ? 'Skill'
        : 'Certificate';

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
          {hasExtraInputs ? (
            <Button
              onClick={this.addExtraInput}
              text={`Add ${extraInputName}`}
            />
          ) : null}
          {addForm ? (
            <Button onClick={() => addForm(formType)} text={'Add Form'} />
          ) : null}
          {removeForm ? (
            <Button
              onClick={() => removeForm(formType, formId)}
              text={'Remove Form'}
            />
          ) : null}

          <button type="submit">Save</button>
        </form>
      </div>
    );
  }
}

export default Form;
