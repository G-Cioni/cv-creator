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
        languagesFormsCounter:[],
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
        }
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
            [counterName]: state.counters[counterName].filter((id) => id !== formId),
          }
        };
      });
      deleteFormState(formName);
    }
  }

  componentDidMount() {
    const { counters } = this.state;
    
    // Adds first uniqid to each form counter
    const updatedCounters = Object.keys(counters).reduce((accumulator, counterName) =>{
      accumulator[counterName] = counters[counterName].concat(uniqid())
      return accumulator
    },{})

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

    const { onFormSave } = this.props;

    // Generates arrays for each form type which will then be rendered
    const personalForms = personalFormsCounter.map((formId) => (
      <Form
        key={formId}
        formId={formId}
        onFormSave={onFormSave}
        formData={personalInfo}
      />
    ));
    const contactForms = contactFormsCounter.map((formId) => (
      <Form
        key={formId}
        formId={formId}
        onFormSave={onFormSave}
        formData={contact}
      />
    ));
    const workForms = workFormsCounter.map((formId) => (
      <Form
        key={formId}
        formId={formId}
        onFormSave={onFormSave}
        formData={workExperiences}
        counter={workFormsCounter}
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
        counter={educationFormsCounter}
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
    const languagesForms = languagesFormsCounter.map((formId) => (
      <Form
        key={formId}
        formId={formId}
        onFormSave={onFormSave}
        formData={languages}
        hasExtraInputs={true}
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