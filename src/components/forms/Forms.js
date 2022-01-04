import React, { Component } from 'react';
import Form from './Form';
import formData from '../../formData';

class Forms extends Component {
  render() {
    const { personalInfo, workExperiences, education } = formData;
    return (
      <div id="forms">
        <Form onFormSave={this.props.onFormSave} formData={personalInfo} />
        <Form onFormSave={this.props.onFormSave} formData={workExperiences} />
        <Form onFormSave={this.props.onFormSave} formData={education} />
      </div>
    );
  }
}

export default Forms;
