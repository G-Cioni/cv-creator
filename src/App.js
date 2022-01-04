import React, { Component } from 'react';
import Forms from './components/forms/Forms';
import './styles/App.css';

class App extends Component {
  constructor() {
    super();
    this.onFormSave = this.onFormSave.bind(this);
  }

  onFormSave(e, formType, formId, formFields) {
    e.preventDefault();
    const formName = `${formType}-${formId}`;
    this.setState((state) => {
      return {
        ...state,
        [formName]: {
          ...formFields,
        },
      };
    });
  }

  render() {
    return (
      <div className="App">
        <Forms onFormSave={this.onFormSave} />
      </div>
    );
  }
}

export default App;
