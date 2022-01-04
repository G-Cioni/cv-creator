import uniqid from 'uniqid';
const getCounterName = (formType) =>
  formType === 'personalInfo'
    ? 'personalFormsCounter'
    : formType === 'workExperiences'
    ? 'workFormsCounter'
    : 'educationFormsCounter';

const getFormName = (formType, formId) => `${formType}-${formId}`;

// Sets a counter to 1 if it's empty
const setCounter = (counter) => {
  const newCounter = [];
  if (counter.length < 1) newCounter.push(uniqid());
  return newCounter;
};
export { getCounterName, getFormName, setCounter };
