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
  let result;
  let newCounter = [];
  if (counter.length < 1) {
    newCounter.push(uniqid());
    result = newCounter;
  } else if (counter.length >= 1) {
    result = counter;
  }
  return result;
};
export { getCounterName, getFormName, setCounter };
