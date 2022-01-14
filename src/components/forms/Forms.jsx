import React, { Component } from 'react';
import Form from './Form';
import formData from '../../helpers/formData';
import uniqid from 'uniqid';
import { getCounterName, getFormName } from '../../helpers/utils';

class Forms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counters: {
        personalFormsCounter: [],
        contactFormsCounter: [],
        workFormsCounter: [],
        educationFormsCounter: [],
        skillsFormsCounter: [],
        certificatesFormsCounter: [],
        languagesFormsCounter: [],
      },
    };
    this.addForm = this.addForm.bind(this);
    this.removeForm = this.removeForm.bind(this);
  }

  // Add a new form
  addForm(formType) {
    const counterName = getCounterName(formType);

    this.setState((state) => {
      return {
        ...state,
        counters: {
          ...state.counters,
          [counterName]: state.counters[counterName].concat(uniqid()),
        },
      };
    });
  }

  // Remove a specific form
  removeForm(formType, formId) {
    const formName = getFormName(formType, formId);
    const counterName = getCounterName(formType);
    const { deleteFormState } = this.props;
    if (this.state.counters[counterName].length > 1) {
      this.setState((state) => {
        return {
          ...state,
          counters: {
            ...state.counters,
            [counterName]: state.counters[counterName].filter(
              (id) => id !== formId,
            ),
          },
        };
      });
      deleteFormState(formName);
    }
  }

  componentDidMount() {
    const { counters } = this.state;

    // Adds first uniqid to each form counter
    const updatedCounters = Object.keys(counters).reduce(
      (accumulator, counterName) => {
        accumulator[counterName] = counters[counterName].concat(uniqid());
        return accumulator;
      },
      {},
    );

    this.setState((state) => {
      return {
        ...state,
        counters: updatedCounters,
      };
    });
  }

  render() {
    const {
      personalInfo,
      contact,
      workExperiences,
      education,
      skills,
      certificates,
      languages,
    } = formData;

    const {
      personalFormsCounter,
      contactFormsCounter,
      workFormsCounter,
      educationFormsCounter,
      skillsFormsCounter,
      certificatesFormsCounter,
      languagesFormsCounter,
    } = this.state.counters;

    const { onInputChange } = this.props;

    // Generates arrays for each form type which will then be rendered
    const personalForms = personalFormsCounter.map((formId) => (
      <Form
        formData={personalInfo}
        formId={formId}
        key={formId}
        onInputChange={onInputChange}
        appState={this.props.appState}
      />
    ));
    const contactForms = contactFormsCounter.map((formId) => (
      <Form
        formData={contact}
        formId={formId}
        hasExtraInputs={true}
        key={formId}
        onInputChange={onInputChange}
        appState={this.props.appState}
      />
    ));
    const workForms = workFormsCounter.map((formId) => (
      <Form
        addForm={this.addForm}
        counter={workFormsCounter}
        formData={workExperiences}
        formId={formId}
        hasExtraInputs={true}
        key={formId}
        onInputChange={onInputChange}
        removeForm={this.removeForm}
        appState={this.props.appState}
      />
    ));
    const educationForms = educationFormsCounter.map((formId) => (
      <Form
        addForm={this.addForm}
        counter={educationFormsCounter}
        formData={education}
        formId={formId}
        key={formId}
        onInputChange={onInputChange}
        removeForm={this.removeForm}
        appState={this.props.appState}
      />
    ));
    const skillsForms = skillsFormsCounter.map((formId) => (
      <Form
        formData={skills}
        formId={formId}
        hasExtraInputs={true}
        key={formId}
        onInputChange={onInputChange}
        appState={this.props.appState}
      />
    ));
    const certificatesForms = certificatesFormsCounter.map((formId) => (
      <Form
        formData={certificates}
        formId={formId}
        hasExtraInputs={true}
        key={formId}
        onInputChange={onInputChange}
        appState={this.props.appState}
      />
    ));
    const languagesForms = languagesFormsCounter.map((formId) => (
      <Form
        formData={languages}
        formId={formId}
        hasExtraInputs={true}
        key={formId}
        onInputChange={onInputChange}
        appState={this.props.appState}
      />
    ));

    return (
      <div id="Forms">
        <div className="formSection">
          <h2 className="formTitle">Personal Info</h2>
          {personalForms}
        </div>
        <div className="formSection">
          <h2 className="formTitle">Contact Info</h2>
          {contactForms}
        </div>
        <div className="formSection">
          <h2 className="formTitle">Work Experiences</h2>
          {workForms}
        </div>
        <div className="formSection">
          <h2 className="formTitle">Education</h2>
          {educationForms}
        </div>
        <div className="formSection">
          <h2 className="formTitle">Skills</h2>
          {skillsForms}
        </div>
        <div className="formSection">
          <h2 className="formTitle">Certificates</h2>
          {certificatesForms}
        </div>
        <div className="formSection">
          <h2 className="formTitle">Languages</h2>
          {languagesForms}
        </div>
      </div>
    );
  }
}

export default Forms;
