import React from 'react';
import Card from './Card';

const Cv = ({ allFormsData }) => {
  const cards = allFormsData
    ? Object.keys(allFormsData).map((card) => {
        const id = card.substring(card.indexOf('-') + 1);
        const className = card.substring(0, card.indexOf('-')) + 'Card';
        return (
          <Card key={id} className={className} formData={allFormsData[card]} />
        );
      })
    : null;
  return <div id="Cv">{cards}</div>;
};

export default Cv;
