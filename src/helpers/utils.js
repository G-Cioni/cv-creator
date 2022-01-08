const getCounterName = (formType) =>
  formType === 'personalInfo'
    ? 'personalFormsCounter'
    : formType === 'workExperiences'
    ? 'workFormsCounter'
    : 'educationFormsCounter';

const getFormName = (formType, formId) => `${formType}-${formId}`;

//Checks if any input in the formData has an input value. Returns a boolean
const checkValuePresence = (allFormsData, card) => {
  return Object.keys(allFormsData[card]).reduce((accumulator, inputName) => {
    Object.keys(allFormsData[card][inputName]).forEach((inputProperty) => {
      if (inputProperty === 'inputValue') {
        accumulator =
          accumulator || allFormsData[card][inputName][inputProperty] !== '';
      }
    });
    return accumulator;
  }, false);
};

export { checkValuePresence, getCounterName, getFormName };
