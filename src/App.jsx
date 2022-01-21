import './styles/App.css';
import { getName } from './helpers/utils';
import Cv from './components/cv/Cv';
import Forms from './components/forms/Forms';
import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    localStorage.cvCreatorApp =
      localStorage.cvCreatorApp ??
      JSON.stringify({ exampleDataActive: false, allFormsData: {} });
    this.state = JSON.parse(localStorage.cvCreatorApp);
    this.deleteFormState = this.deleteFormState.bind(this);
    this.deleteInputState = this.deleteInputState.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.toggleExampleData = this.toggleExampleData.bind(this);
  }

  deleteFormState(formName) {
    this.setState((state) => {
      delete state.allFormsData[formName];
      return state;
    });
  }

  deleteInputState(formName, inputName) {
    this.setState((state) => {
      if (state.allFormsData[formName])
        delete state.allFormsData[formName][inputName];
      return state;
    });
  }

  onInputChange(e, formType, formId, formFields, inputName) {
    e.preventDefault();
    const formName = getName(formType, formId);
    const updatedState = {
      ...this.state,
      allFormsData: {
        ...this.state.allFormsData,
        [formName]: {
          ...this.state.allFormsData[formName],
          [inputName]: {
            ...formFields[inputName],
            inputValue: e.target.value,
          },
        },
      },
    };

    this.setState(updatedState);
    localStorage.cvCreatorApp = JSON.stringify(updatedState);
  }
  toggleExampleData() {
    this.setState((state) => {
      return {
        ...state,
        exampleDataActive: !state.exampleDataActive,
      };
    });
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
          exampleDataActive={this.state.exampleDataActive}
          onInputChange={this.onInputChange}
          toggleExampleData={this.toggleExampleData}
        />
        <Cv
          allFormsData={this.state.allFormsData}
          exampleDataActive={this.state.exampleDataActive}
        />
      </div>
    );
  }
}

export default App;
