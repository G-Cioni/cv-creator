import { getCounterName, getName } from '../../helpers/utils';
import Form from './Form';
import formData from '../../helpers/formData';
import React, { Component } from 'react';
import uniqid from 'uniqid';

class Forms extends Component {
  constructor(props) {
    super(props);
    localStorage.cvCreatorForms =
      localStorage.cvCreatorForms ??
      JSON.stringify({
        counters: {
          certificatesFormsCounter: [],
          contactFormsCounter: [],
          educationFormsCounter: [],
          languagesFormsCounter: [],
          personalFormsCounter: [],
          skillsFormsCounter: [],
          workFormsCounter: [],
        },
      });
    this.addForm = this.addForm.bind(this);
    this.removeForm = this.removeForm.bind(this);
    this.state = JSON.parse(localStorage.cvCreatorForms);
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
    const formName = getName(formType, formId);
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
    // Adds first uniqid to each form counter
    const { counters } = this.state;
    const updatedCounters = Object.keys(counters).reduce(
      (accumulator, counterName) => {
        accumulator[counterName] =
          counters[counterName].length < 1
            ? counters[counterName].concat(uniqid())
            : counters[counterName];
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

  componentDidUpdate() {
    localStorage.cvCreatorForms = JSON.stringify(this.state);
  }

  render() {
    const {
      certificates,
      contact,
      education,
      languages,
      personalInfo,
      skills,
      workExperiences,
    } = formData;

    const {
      certificatesFormsCounter,
      contactFormsCounter,
      educationFormsCounter,
      languagesFormsCounter,
      personalFormsCounter,
      skillsFormsCounter,
      workFormsCounter,
    } = this.state.counters;

    const { appState, exampleDataActive, deleteInputState, toggleExampleData } =
      this.props;

    // Generates arrays for each form type which will then be rendered
    const personalForms = personalFormsCounter.map((formId) => (
      <Form
        appState={appState}
        formData={personalInfo}
        formId={formId}
        key={formId}
        styles={exampleDataActive ? { display: 'none' } : null}
      />
    ));
    const contactForms = contactFormsCounter.map((formId) => (
      <Form
        appState={appState}
        deleteInputState={deleteInputState}
        formData={contact}
        formId={formId}
        hasExtraInputs={true}
        key={formId}
        styles={exampleDataActive ? { display: 'none' } : null}
      />
    ));
    const workForms = workFormsCounter.map((formId) => (
      <Form
        addForm={this.addForm}
        appState={appState}
        counter={workFormsCounter}
        deleteInputState={deleteInputState}
        formData={workExperiences}
        formId={formId}
        hasExtraInputs={true}
        key={formId}
        styles={exampleDataActive ? { display: 'none' } : null}
        removeForm={this.removeForm}
      />
    ));
    const educationForms = educationFormsCounter.map((formId) => (
      <Form
        addForm={this.addForm}
        appState={appState}
        counter={educationFormsCounter}
        deleteInputState={deleteInputState}
        formData={education}
        formId={formId}
        hasExtraInputs={true}
        key={formId}
        styles={exampleDataActive ? { display: 'none' } : null}
        removeForm={this.removeForm}
      />
    ));
    const skillsForms = skillsFormsCounter.map((formId) => (
      <Form
        appState={appState}
        deleteInputState={deleteInputState}
        formData={skills}
        formId={formId}
        hasExtraInputs={true}
        key={formId}
        styles={exampleDataActive ? { display: 'none' } : null}
      />
    ));
    const certificatesForms = certificatesFormsCounter.map((formId) => (
      <Form
        appState={appState}
        deleteInputState={deleteInputState}
        formData={certificates}
        formId={formId}
        hasExtraInputs={true}
        key={formId}
        styles={exampleDataActive ? { display: 'none' } : null}
      />
    ));
    const languagesForms = languagesFormsCounter.map((formId) => (
      <Form
        appState={appState}
        deleteInputState={deleteInputState}
        formData={languages}
        formId={formId}
        hasExtraInputs={true}
        key={formId}
        styles={exampleDataActive ? { display: 'none' } : null}
      />
    ));

    return (
      <div id="Forms">
        <button id="exampleDataBtn" onClick={toggleExampleData}>
          {exampleDataActive ? 'Hide Example' : 'Show Example'}
        </button>
        <div
          style={exampleDataActive ? { display: 'none' } : null}
          className="formSection"
        >
          <h2 className="formTitle">Personal Info</h2>
          {personalForms}
        </div>
        <div
          style={exampleDataActive ? { display: 'none' } : null}
          className="formSection"
        >
          <h2 className="formTitle">Contact Details</h2>
          {contactForms}
        </div>
        <div
          style={exampleDataActive ? { display: 'none' } : null}
          className="formSection"
        >
          <h2 className="formTitle">Work Experiences</h2>
          {workForms}
        </div>
        <div
          style={exampleDataActive ? { display: 'none' } : null}
          className="formSection"
        >
          <h2 className="formTitle">Education</h2>
          {educationForms}
        </div>
        <div
          style={exampleDataActive ? { display: 'none' } : null}
          className="formSection"
        >
          <h2 className="formTitle">Skills</h2>
          {skillsForms}
        </div>
        <div
          style={exampleDataActive ? { display: 'none' } : null}
          className="formSection"
        >
          <h2 className="formTitle">Certificates</h2>
          {certificatesForms}
        </div>
        <div
          style={exampleDataActive ? { display: 'none' } : null}
          className="formSection"
        >
          <h2 className="formTitle">Languages</h2>
          {languagesForms}
        </div>
        <button id="generatePdfBtn" onClick={window.print}>
          Generate pdf
        </button>
      </div>
    );
  }
}

export default Forms;
