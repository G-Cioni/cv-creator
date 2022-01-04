import React, { Component } from 'react';
import Forms from './components/forms/Forms';
import './styles/App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {};
    this.onFormSave = this.onFormSave.bind(this);
  }

  onFormSave(e, formName, formFields) {
    e.preventDefault();
    this.setState({
      ...this.state,
      [formName]: {
        ...formFields,
      },
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
