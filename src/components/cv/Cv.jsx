import React from "react";
import Card from "./Card";
import { checkValuePresence, getCardDetails } from "../../helpers/utils";

const Cv = ({ allFormsData }) => {
  // Creates a cards object which will be rendered in JSX
  const cards = allFormsData
    ? Object.keys(allFormsData).reduce((accumulator, cardName) => {
        const { id, cardArray, className } = getCardDetails(cardName);

        accumulator[cardArray] = accumulator[cardArray] ?? [];

        accumulator = {
          ...accumulator,
          [`${cardArray}HasValue`]: checkValuePresence(allFormsData, cardName),
          [cardArray]: accumulator[cardArray].concat(
            <Card
              key={id}
              className={className}
              formData={allFormsData[cardName]}
            />
          )
        };

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
    languagesHasValue
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
            {workExperiencesHasValue ? "Work Experience" : null}
          </h2>
          {workExperiences}
        </div>
        <div id="educationCv">
          <h2 className="cvTitle">{educationHasValue ? "Education" : null}</h2>
          {education}
        </div>
      </div>
      <div id="scl">
        <h2 className="cvTitle">{skillsHasValue ? "Skills" : null}</h2>
        {skills}
        <h2 className="cvTitle">
          {certificatesHasValue ? "Certificates" : null}
        </h2>
        {certificates}
        <h2 className="cvTitle">{languagesHasValue ? "Languages" : null}</h2>
        {languages}
      </div>
    </div>
  );
};

export default Cv;
