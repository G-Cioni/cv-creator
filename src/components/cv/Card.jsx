import React from "react";

const Card = ({ formData, className }) => {
  const cardDetails = formData
    ? Object.keys(formData).reduce(
        (accumulator, detail) => {
          const { inputValue: text, id, name } = formData[detail];
          const { details, extraDetails } = accumulator;
          const detailClassName = name.includes("-")
            ? name.substring(0, name.indexOf("-"))
            : name;

          if (["workDuty"].includes(detailClassName)) {
            extraDetails.push(
              <p key={id} className={detailClassName}>
                {text}
              </p>
            );
          } else if (["description"].includes(detailClassName)) {
            details.push(
              <p key={id} className={detailClassName}>
                {text}
              </p>
            );
          } else {
            details.push(
              <span key={id} className={detailClassName}>
                {text}
              </span>
            );
          }
          return accumulator;
        },
        {
          details: [],
          extraDetails: []
        }
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
