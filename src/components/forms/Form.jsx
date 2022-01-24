import { getName } from '../../helpers/utils';
import Button from './Button';
import Input from './Input';
import React, { Component } from 'react';
import uniqid from 'uniqid';

class Form extends Component {
  constructor(props) {
    super(props);
    const { formId } = this.props;
    localStorage[`cvCreator${formId}`] =
      localStorage[`cvCreator${formId}`] ??
      JSON.stringify({
        ...this.props.formData,
        extraInputsCounter: [],
      });
    this.state = JSON.parse(localStorage[`cvCreator${formId}`]);

    this.addExtraInput = this.addExtraInput.bind(this);
    this.removeExtraInput = this.removeExtraInput.bind(this);
  }

  // Adds an extra input and takes into consideration it's context
  addExtraInput() {
    const { formId, hasExtraInputs } = this.props;

    let {
      extraInputsCounter,
      extraInputType,
      extraInputPlaceHolder,
      extraInputName,
    } = this.state;

    const newCounter = extraInputsCounter.concat(uniqid());

    if (hasExtraInputs) {
      let extraInputs = [];

      // Creates a new object which temporarily holds the new state for each new input field
      extraInputs = newCounter.reduce((accumulator, id) => {
        //Checks if the extra input is already in state and updates the accumulator if it isn't
        if (!extraInputsCounter.includes(id)) {
          accumulator = {
            ...accumulator,
            [`${extraInputName}-${id}`]: {
              id,
              inputValue: '',
              name: `${extraInputName}-${id}`,
              placeHolder: extraInputPlaceHolder,
              type: extraInputType,
            },
          };
        }
        return accumulator;
      }, {});

      // Adds all of the extra input fields to the state and updates the counter
      const updatedState = {
        ...this.state,
        formFields: {
          ...this.state.formFields,
          ...extraInputs,
        },
        extraInputsCounter: newCounter,
      };

      this.setState(updatedState);
      localStorage[`cvCreator${formId}`] = JSON.stringify(updatedState);
    }
  }

  // Removes a specific input field from the state and counter
  removeExtraInput(name, formName) {
    const { extraInputsCounter } = this.state;
    const { deleteInputState, formId } = this.props;

    let updatedState;
    if (extraInputsCounter.length > 1) {
      delete this.state.formFields[name];
      updatedState = {
        ...this.state,
        extraInputsCounter: this.state.extraInputsCounter.filter(
          (id) => !name.includes(id),
        ),
      };

      this.setState(updatedState);
      localStorage[`cvCreator${formId}`] = JSON.stringify(updatedState);
    }
    deleteInputState(formName, name);
  }

  componentDidMount() {
    // Add's the first uniqid to the extraInputCounter if it's empty
    const { extraInputsCounter } = this.state;
    if (extraInputsCounter.length < 1) {
      this.addExtraInput();
    }
  }

  componentDidUpdate() {
    // This is necessary for when the Reset Input Data is triggered
    const { formId } = this.props;
    const { extraInputsCounter } = this.state;
    const newState = {
      ...this.props.formData,
      extraInputsCounter: [],
    };

    /* Since the Component updates after state is set, not in this if 
    statement but in the next, the following if statement will run one 
    more time and add the initial extra input */
    if (extraInputsCounter.length < 1) this.addExtraInput();

    // Resets state and localStorage to initial state
    if (!localStorage[`cvCreator${formId}`]) {
      localStorage[`cvCreator${formId}`] = JSON.stringify(newState);
      this.setState(newState);
    }
  }

  componentWillUnmount() {
    // Saves to localStorage before unmounting
    const { formId } = this.props;
    delete localStorage[`cvCreator${formId}`];
  }

  render() {
    const {
      extraInputName,
      extraInputPlaceHolder,
      extraInputsCounter,
      formFields,
      formType,
    } = this.state;

    const {
      addForm,
      appState,
      counter,
      formData,
      formId,
      hasExtraInputs,
      onInputChange,
      removeForm,
      styles,
    } = this.props;
    // Creates an array of all the input fields to then render
    let inputs;
    if (formFields) {
      inputs = Object.keys(formFields).map((inputName) => {
        const {
          id: defaultId,
          placeHolder,
          name,
          type,
        } = formFields[inputName];
        const formName = getName(formType, formId);
        const inputId = name.includes(defaultId) ? name : getName(name, formId);

        return (
          <Input
            counter={extraInputsCounter}
            extraInputName={extraInputName ?? null}
            formName={formName}
            handleOnChange={(e) =>
              onInputChange(e, formType, formId, formFields, name)
            }
            inputId={inputId}
            inputValue={
              appState.allFormsData[formName] &&
              appState.allFormsData[formName][inputName] &&
              appState.allFormsData[formName][inputName].inputValue
                ? appState.allFormsData[formName][inputName].inputValue
                : ''
            }
            key={inputId}
            name={name}
            parentFormType={formType}
            placeHolder={placeHolder}
            removeExtraInput={
              name.includes(inputId) ? this.removeExtraInput : null
            }
            type={type}
          />
        );
      });
    }
    return (
      <div className="form" style={{ display: styles?.display }}>
        {inputs}
        {hasExtraInputs ? (
          <Button
            onClick={this.addExtraInput}
            text={`Add ${extraInputPlaceHolder}`}
          />
        ) : null}
        {/* Only renders "Add form" button if its the last form of its type */}
        {counter?.indexOf(formId) === counter?.length - 1 ? (
          <Button
            onClick={() => addForm(formType)}
            text={`Add ${formData.formTitle} Form`}
          />
        ) : null}
        {removeForm && counter.length > 1 ? (
          <Button
            onClick={() => removeForm(formType, formId)}
            text={'Remove Form'}
            noFocus={true}
          />
        ) : null}
      </div>
    );
  }
}

export default Form;
