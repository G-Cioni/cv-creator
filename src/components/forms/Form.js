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
    this.removeExtraInput = this.removeExtraInput.bind(this);
  }

  // Updates state on input change
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

  // Adds an extra input and takes into consideration it's context
  addExtraInput() {
    const { hasExtraInputs } = this.props;

    let { formType, extraInputsCounter } = this.state;
    const newCounter = extraInputsCounter.concat(uniqid());

    if (hasExtraInputs) {
      let extraInputs = [];

      // Declare variables which will be used to update state
      let inputName;
      let inputPlaceholder;
      let inputType;

      // Assigns correct values to the variables
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

      // Creates a new object which temporarily holds the new state for each new input field
      extraInputs = newCounter.reduce((accumulator, id) => {
        if (!extraInputsCounter.includes(id)) {
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
        }
        return accumulator;
      }, {});

      // Adds all of the extra input fields to the state and updates the counter
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

  // Removes a specific input field from the state and counter
  removeExtraInput(name, inputId) {
    const { extraInputsCounter } = this.state;
    if (extraInputsCounter.length > 1) {
      this.setState((state) => {
        delete state.formFields[name];
        return {
          ...state,
          extraInputsCounter: state.extraInputsCounter.filter(
            (id) => id !== inputId,
          ),
        };
      });
    }
  }

  componentDidMount() {
    // Add's the first uniqid to the extraInputCounter
    this.addExtraInput();
  }

  render() {
    const { formFields, formTitle, formType } = this.state;
    const { formId, addForm, onFormSave, removeForm, hasExtraInputs } =
      this.props;

    // Assigns the extra input fields name based on it's context
    const extraInputName =
      formType === 'workExperiences'
        ? 'Work Duty'
        : formType === 'skills'
        ? 'Skill'
        : 'Certificate';

    // Creates an array of all the input fields to then render
    const inputs = Object.keys(formFields).map((inputName) => {
      const { id, placeHolder, name, inputValue, type } = formFields[inputName];
      return (
        <Input
          key={id}
          inputId={id}
          type={type}
          placeHolder={placeHolder}
          name={name}
          parentFormType={formType}
          inputValue={inputValue}
          handleOnChange={this.onInputChange}
          removeExtraInput={name.includes(id) ? this.removeExtraInput : null}
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
