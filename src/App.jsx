import './styles/App.css';
import { getName } from './helpers/utils';
import Cv from './components/cv/Cv';
import Forms from './components/forms/Forms';
import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    localStorage.cvCreatorApp = localStorage.cvCreatorApp ?? JSON.stringify({});
    this.state = JSON.parse(localStorage.cvCreatorApp);
    this.deleteFormState = this.deleteFormState.bind(this);
    this.deleteInputState = this.deleteInputState.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  deleteFormState(formName) {
    this.setState((state) => {
      delete state[formName];
      return state;
    });
  }

  deleteInputState(formName, inputName) {
    this.setState((state) => {
      if (state[formName]) delete state[formName][inputName];
      return state;
    });
  }

  onInputChange(e, formType, formId, formFields, inputName) {
    e.preventDefault();
    const formName = getName(formType, formId);
    const updatedState = {
      ...this.state,
      [formName]: {
        ...this.state[formName],
        [inputName]: {
          ...formFields[inputName],
          inputValue: e.target.value,
        },
      },
    };

    this.setState(updatedState);
    localStorage.cvCreatorApp = JSON.stringify(updatedState);
  }

  componentDidUpdate() {
    localStorage.cvCreatorApp = JSON.stringify(this.state);
  }

  render() {
    return (
      <div id="App">
        <Forms
          appState={this.state}
          deleteFormState={this.deleteFormState}
          deleteInputState={this.deleteInputState}
          onInputChange={this.onInputChange}
        />
        <Cv allFormsData={this.state} />
      </div>
    );
  }
}

export default App;
