import React from 'react';

const Card = ({ formData, className }) => {
  // Creates an object with details and extraDetails which are rendered in JSX
  const cardDetails = formData
    ? Object.keys(formData).reduce(
        (accumulator, detail) => {
          const { inputValue: text, id, name } = formData[detail];
          const { details, extraDetails } = accumulator;
          const inputFieldName = name.includes('-')
            ? name.substring(0, name.indexOf('-'))
            : name;
          const cardDetailClassName =
            formData[inputFieldName]?.inputValue !== '' ? inputFieldName : null;
          if (['extraDetail'].includes(inputFieldName)) {
            extraDetails.push(
              <p key={id} className={cardDetailClassName}>
                {text}
              </p>,
            );
          } else if (['description'].includes(inputFieldName)) {
            details.push(
              <p key={id} className={cardDetailClassName}>
                {text}
              </p>,
            );
          } else {
            details.push(
              <span key={id} className={cardDetailClassName}>
                {text}
              </span>,
            );
          }
          return accumulator;
        },
        {
          details: [],
          extraDetails: [],
        },
      )
    : null;

  return (
    <div className={className}>
      {cardDetails.details}
      <div className="extraDetails">{cardDetails.extraDetails}</div>
    </div>
  );
};

export default Card;
