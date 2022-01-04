import React, { Component } from 'react';
import Form from './Form';
import formData from '../../formData';
import uniqid from 'uniqid';
import { getCounterName, getFormName } from '../../utils';

class Forms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personalFormsCounter: [],
      workFormsCounter: [],
      educationFormsCounter: [],
    };
    this.addForm = this.addForm.bind(this);
    this.removeForm = this.removeForm.bind(this);
  }

  addForm(formType) {
    const counterName = getCounterName(formType);

    this.setState((state) => {
      return {
        ...state,
        [counterName]: state[counterName].concat(uniqid()),
      };
    });
  }

  removeForm(formType, formId) {
    const formName = getFormName(formType, formId);
    const counterName = getCounterName(formType);
    const { deleteFormState } = this.props;
    if (this.state[counterName].length > 1) {
      this.setState((state) => {
        return {
          ...state,
          [counterName]: state[counterName].filter((id) => id !== formId),
        };
      });
      deleteFormState(formName);
    }
  }

  componentDidMount() {
    const { personalFormsCounter, workFormsCounter, educationFormsCounter } =
      this.state;

    if (personalFormsCounter.length < 1) {
      this.setState((state) => {
        return {
          ...state,
          personalFormsCounter: personalFormsCounter.concat(uniqid()),
        };
      });
    }
    if (workFormsCounter.length < 1) {
      this.setState((state) => {
        return {
          ...state,
          workFormsCounter: workFormsCounter.concat(uniqid()),
        };
      });
    }
    if (educationFormsCounter.length < 1) {
      this.setState((state) => {
        return {
          ...state,
          educationFormsCounter: educationFormsCounter.concat(uniqid()),
        };
      });
    }
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
        removeForm={this.removeForm}
      />
    ));

    const educationForms = educationFormsCounter.map((formId) => (
      <Form
        key={formId}
        formId={formId}
        onFormSave={onFormSave}
        formData={education}
        addForm={this.addForm}
        removeForm={this.removeForm}
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
