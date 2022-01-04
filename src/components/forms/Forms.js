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
      skillsFormsCounter: [],
      certificatesFormsCounter: [],
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
    const {
      personalFormsCounter,
      workFormsCounter,
      educationFormsCounter,
      skillsFormsCounter,
      certificatesFormsCounter,
    } = this.state;

    // Sets form counters length to 1
    this.setState((state) => {
      return {
        ...state,
        personalFormsCounter: personalFormsCounter.concat(uniqid()),
        workFormsCounter: workFormsCounter.concat(uniqid()),
        educationFormsCounter: educationFormsCounter.concat(uniqid()),
        skillsFormsCounter: skillsFormsCounter.concat(uniqid()),
        certificatesFormsCounter: certificatesFormsCounter.concat(uniqid()),
      };
    });
  }

  render() {
    const { personalInfo, workExperiences, education, skills, certificates } =
      formData;
    const {
      personalFormsCounter,
      workFormsCounter,
      educationFormsCounter,
      skillsFormsCounter,
      certificatesFormsCounter,
    } = this.state;
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
    const skillsForms = skillsFormsCounter.map((formId) => (
      <Form
        key={formId}
        formId={formId}
        onFormSave={onFormSave}
        formData={skills}
        hasExtraInputs={true}
      />
    ));
    const certificatesForms = certificatesFormsCounter.map((formId) => (
      <Form
        key={formId}
        formId={formId}
        onFormSave={onFormSave}
        formData={certificates}
        hasExtraInputs={true}
      />
    ));

    return (
      <div id="forms">
        {personalForms}
        {workForms}
        {educationForms}
        {skillsForms}
        {certificatesForms}
      </div>
    );
  }
}

export default Forms;
