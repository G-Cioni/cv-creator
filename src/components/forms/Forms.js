import React, { Component } from 'react';
import Form from './Form';
import formData from '../../formData';
import uniqid from 'uniqid';

class Forms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personalFormsCounter: [],
      workFormsCounter: [],
      educationFormsCounter: [],
    };
    this.addForm = this.addForm.bind(this);
  }

  addForm(formType) {
    const counterName =
      formType === 'personalInfo'
        ? 'personalFormsCounter'
        : formType === 'workExperiences'
        ? 'workFormsCounter'
        : 'educationFormsCounter';
    this.setState({
      ...this.state,
      [counterName]: this.state[counterName].concat(uniqid()),
    });
  }

  componentDidMount() {
    let updatedState = this.state;
    const { personalFormsCounter, workFormsCounter, educationFormsCounter } =
      this.state;

    if (personalFormsCounter.length < 1) {
      updatedState = {
        ...updatedState,
        personalFormsCounter: updatedState.personalFormsCounter.concat(
          uniqid(),
        ),
      };
    }
    if (workFormsCounter.length < 1) {
      updatedState = {
        ...updatedState,
        workFormsCounter: updatedState.workFormsCounter.concat(uniqid()),
      };
    }

    if (educationFormsCounter.length < 1) {
      updatedState = {
        ...updatedState,
        educationFormsCounter: updatedState.educationFormsCounter.concat(
          uniqid(),
        ),
      };
    }

    this.setState(updatedState);
  }

  render() {
    const { personalInfo, workExperiences, education } = formData;
    const { personalFormsCounter, workFormsCounter, educationFormsCounter } =
      this.state;
    const { onFormSave } = this.props;

    const personalForms = personalFormsCounter.map((formId) => (
      <Form
        key={formId}
        formId={formId}
        onFormSave={onFormSave}
        formData={personalInfo}
      />
    ));
    const workForms = workFormsCounter.map((formId) => (
      <Form
        key={formId}
        formId={formId}
        onFormSave={onFormSave}
        formData={workExperiences}
        addForm={this.addForm}
      />
    ));

    const educationForms = educationFormsCounter.map((formId) => (
      <Form
        key={formId}
        formId={formId}
        onFormSave={onFormSave}
        formData={education}
        addForm={this.addForm}
      />
    ));

    return (
      <div id="forms">
        {personalForms}
        {workForms}
        {educationForms}
      </div>
    );
  }
}

export default Forms;
