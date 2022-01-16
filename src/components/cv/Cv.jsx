import { checkValuePresence, getCardDetails } from '../../helpers/utils';
import Card from './Card';
import React from 'react';

const Cv = ({ allFormsData }) => {
  // Creates a cards object which will be rendered in JSX
  const cards = allFormsData
    ? Object.keys(allFormsData).reduce((accumulator, cardName) => {
        const { cardArray, className, id } = getCardDetails(cardName);
        const card = checkValuePresence(allFormsData, cardName) ? (
          <Card
            className={className}
            formData={allFormsData[cardName]}
            key={id}
          />
        ) : null;
        accumulator[cardArray] = accumulator[cardArray] ?? [];

        accumulator = {
          ...accumulator,
          [cardArray]: accumulator[cardArray]
            .filter((card) => card !== null)
            .concat(card),
        };
        accumulator = {
          ...accumulator,
          [`${cardArray}HasValue`]: accumulator[cardArray][0] !== null,
        };

        return accumulator;
      }, {})
    : null;

  const {
    certificates,
    certificatesHasValue,
    contact,
    education,
    educationHasValue,
    languages,
    languagesHasValue,
    personalInfo,
    skills,
    skillsHasValue,
    workExperiences,
    workExperiencesHasValue,
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
