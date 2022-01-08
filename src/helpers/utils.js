const getCounterName = (formType) =>
  formType === 'personalInfo'
    ? 'personalFormsCounter'
    : formType === 'workExperiences'
    ? 'workFormsCounter'
    : 'educationFormsCounter';

const getFormName = (formType, formId) => `${formType}-${formId}`;

// Extracts card details from cardName
const getCardDetails = (cardName) => {
  const id = cardName.substring(cardName.indexOf('-') + 1);
  const cardArray = cardName.substring(0, cardName.indexOf('-'));
  const className = cardArray + 'Card';
  return { id, cardArray, className };
};

//Checks if any input in the formData has an input value. Returns a boolean
const checkValuePresence = (allFormsData, cardName) => {
  return Object.keys(allFormsData[cardName]).reduce(
    (accumulator, inputName) => {
      Object.keys(allFormsData[cardName][inputName]).forEach(
        (inputProperty) => {
          if (inputProperty === 'inputValue') {
            accumulator =
              accumulator ||
              allFormsData[cardName][inputName][inputProperty] !== '';
          }
        },
      );
      return accumulator;
    },
    false,
  );
};

export { checkValuePresence, getCardDetails, getCounterName, getFormName };
