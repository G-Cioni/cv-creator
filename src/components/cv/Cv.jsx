import React from 'react';
import Card from './Card';
import { checkValuePresence } from '../../helpers/utils';

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
        accumulator[`${cardArray}HasValue`] = checkValuePresence(
          allFormsData,
          card,
        );
        return accumulator;
      }, {})
    : null;

  const {
    personalInfo,
    contact,
    workExperiences,
    workExperiencesHasValue,
    education,
    educationHasValue,
    skills,
    skillsHasValue,
    certificates,
    certificatesHasValue,
    languages,
    languagesHasValue,
  } = cards;
  return (
    <div id="Cv">
      <div id="personalContact">
        {personalInfo}
        {contact}
      </div>
      <div id="workEducation">
        <div id="workExperiencesCV">
          <h2 className="cvTitle">
            {workExperiencesHasValue ? 'Work Experience' : null}
          </h2>
          {workExperiences}
        </div>
        <div id="educationCv">
          <h2 className="cvTitle">{educationHasValue ? 'Education' : null}</h2>
          {education}
        </div>
      </div>
      <div id="scl">
        <h2 className="cvTitle">{skillsHasValue ? 'Skills' : null}</h2>
        {skills}
        <h2 className="cvTitle">
          {certificatesHasValue ? 'Certificates' : null}
        </h2>
        {certificates}
        <h2 className="cvTitle">{languagesHasValue ? 'Languages' : null}</h2>
        {languages}
      </div>
    </div>
  );
};

export default Cv;
