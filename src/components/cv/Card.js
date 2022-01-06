import React from 'react';

const Card = ({ formData }) => {
  const details = formData
    ? Object.keys(formData).map((detail) => {
        const { inputValue: text, id, name: className } = formData[detail];
        //todo consider rendering different html tags instead of always a div
        return (
          <div key={id} className={className}>
            {text}
          </div>
        );
      })
    : null;
  return <div className="card">{details}</div>;
};

export default Card;
