import React from 'react';
import Card from './Card';

const Cv = ({ allFormsData }) => {
  const cards = allFormsData
    ? Object.keys(allFormsData).reduce((accumulator, card) => {
        const id = card.substring(card.indexOf('-') + 1);
        const cardArray = card.substring(0, card.indexOf('-'));
        const className = cardArray + 'Card';
        if (accumulator[cardArray] === undefined) {
          accumulator[cardArray] = [];
        }
        accumulator[cardArray].push(
          <Card key={id} className={className} formData={allFormsData[card]} />,
        );
        return accumulator;
      }, {})
    : null;

  const {
    personalInfo,
    contact,
    workExperiences,
    education,
    skills,
    certificates,
    languages,
  } = cards;

  return (
    <div id="Cv">
      <div id="personalContact">
        {personalInfo}
        {contact}
      </div>
      <div id="workEducation">
        <div id="workExperiencesCV">{workExperiences}</div>
        <div id="educationCv">{education}</div>
      </div>
      <div id="scl">
        {skills}
        {certificates}
        {languages}
      </div>
    </div>
  );
};

export default Cv;
