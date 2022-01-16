import './styles/App.css';
import React, { Component } from 'react';
import Forms from './components/forms/Forms';
import Cv from './components/cv/Cv';
import { getName } from './helpers/utils';

class App extends Component {
  constructor() {
    super();
    this.state = {};
    this.onInputChange = this.onInputChange.bind(this);
    this.deleteFormState = this.deleteFormState.bind(this);
    this.deleteInputState = this.deleteInputState.bind(this);
  }

  onInputChange(e, formType, formId, formFields, inputName) {
    e.preventDefault();
    const formName = getName(formType, formId);
    this.setState((state) => {
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

  deleteInputState(formName, inputName) {
    this.setState((state) => {
      if (state[formName]) delete state[formName][inputName];
      return state;
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
          onInputChange={this.onInputChange}
          deleteFormState={this.deleteFormState}
          deleteInputState={this.deleteInputState}
          appState={this.state}
        />
        <Cv allFormsData={this.state} />
      </div>
    );
  }
}

export default App;
