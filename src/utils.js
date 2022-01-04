const getCounterName = (formType) =>
  formType === 'personalInfo'
    ? 'personalFormsCounter'
    : formType === 'workExperiences'
    ? 'workFormsCounter'
    : 'educationFormsCounter';

const getFormName = (formType, formId) => `${formType}-${formId}`;

export { getCounterName, getFormName };
