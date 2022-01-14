import './styles/App.css';
import React, { Component } from 'react';
import Forms from './components/forms/Forms';
import Cv from './components/cv/Cv';
import { getFormName } from './helpers/utils';

class App extends Component {
  constructor() {
    super();
    this.state = {};
    this.onFormSave = this.onFormSave.bind(this);
    this.deleteFormState = this.deleteFormState.bind(this);
  }

  onFormSave(e, formType, formId, formFields, inputName) {
    e.preventDefault();
    const formName = getFormName(formType, formId);
    this.setState((state) => {
      console.log(state);
      return {
        ...state,
        [formName]: {
          ...state[formName],
          [inputName]: {
            ...formFields[inputName],
            inputValue: e.target.value,
          },
        },
      };
    });
  }

  deleteFormState(formName) {
    this.setState((state) => {
      delete state[formName];
      return state;
    });
  }

  render() {
    return (
      <div id="App">
        <Forms
          onFormSave={this.onFormSave}
          deleteFormState={this.deleteFormState}
          appState={this.state}
        />
        <Cv allFormsData={this.state} />
      </div>
    );
  }
}

export default App;
