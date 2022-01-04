const getCounterName = (formType) => {
  return formType === 'personalInfo'
    ? 'personalFormsCounter'
    : formType === 'workExperiences'
    ? 'workFormsCounter'
    : 'educationFormsCounter';
};

export { getCounterName };
