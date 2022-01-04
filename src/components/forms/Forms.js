import React, { Component } from 'react';
import Form from './Form';
import formData from '../../formData';
import uniqid from 'uniqid';
import { getCounterName, getFormName, setCounter } from '../../utils';

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

    // Sets form counters to 1 if they are empty
    this.setState((state) => {
      return {
        ...state,
        personalFormsCounter: setCounter(personalFormsCounter),
        workFormsCounter: setCounter(workFormsCounter),
        educationFormsCounter: setCounter(educationFormsCounter),
      };
    });
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
        hasExtraInputs={true}
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
