import React from 'react';
import Card from './Card';

const Cv = ({ allFormsData }) => {
  const cards = allFormsData
    ? Object.keys(allFormsData).map((card) => {
        const id = card.substring(card.indexOf('-') + 1);
        return <Card key={id} formData={allFormsData[card]} />;
      })
    : null;
  return <div id="cv">{cards}</div>;
};

export default Cv;
