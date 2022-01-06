import React from 'react';

const Card = ({ formData, className }) => {
  const details = formData
    ? Object.keys(formData).map((detail) => {
        const { inputValue: text, id, name } = formData[detail];
        const className = name.includes('-')
          ? name.substring(0, name.indexOf('-'))
          : name;

        return ['workDuty', 'description'].includes(className) ? (
          <p key={id} className={className}>
            {text}
          </p>
        ) : (
          <span key={id} className={className}>
            {text}
          </span>
        );
      })
    : null;

  return <div className={className}>{details}</div>;
};

export default Card;
