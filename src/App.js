import './styles/App.css';
import React, { Component } from 'react';
import Forms from './components/forms/Forms';
import Cv from './components/cv/Cv';
import { getFormName } from './utils';

class App extends Component {
  constructor() {
    super();
    this.onFormSave = this.onFormSave.bind(this);
    this.deleteFormState = this.deleteFormState.bind(this);
  }

  onFormSave(e, formType, formId, formFields) {
    e.preventDefault();
    const formName = getFormName(formType, formId);
    this.setState((state) => {
      return {
        ...state,
        [formName]: {
          ...formFields,
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
      <div className="App">
        <Forms
          onFormSave={this.onFormSave}
          deleteFormState={this.deleteFormState}
        />
        <Cv />
      </div>
    );
  }
}

export default App;
