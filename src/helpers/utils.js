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

// Extracts card details from cardName
const getCardDetails = (cardName) => {
  const id = cardName.substring(cardName.indexOf('-') + 1);
  const cardArray = cardName.substring(0, cardName.indexOf('-'));
  const className = cardArray + 'Card';
  return { id, cardArray, className };
};

const getCounterName = (formType) =>
  formType === 'personalInfo'
    ? 'personalFormsCounter'
    : formType === 'workExperiences'
    ? 'workFormsCounter'
    : 'educationFormsCounter';

const getName = (name, id) => `${name}-${id}`;

const consent =
  'I hereby consent to the processing of the data I provided in this CV. I declare my agreement with the data protection regulations in the data privacy statement.';

export { checkValuePresence, consent, getCardDetails, getCounterName, getName };
