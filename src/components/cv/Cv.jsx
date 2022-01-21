import { checkValuePresence, getCardDetails } from '../../helpers/utils';
import Avatar from './Avatar';
import Card from './Card';
import exampleFormData from '../../helpers/exampleFormData';
import React, { Component } from 'react';

class Cv extends Component {
  render() {
    const { allFormsData, exampleDataActive } = this.props;
    // Creates a cards object which will be rendered in JSX
    const dataToUse = exampleDataActive ? exampleFormData : allFormsData;
    const cards = dataToUse
      ? Object.keys(dataToUse).reduce((accumulator, cardName) => {
          const { cardArray, className, id } = getCardDetails(cardName);
          const card = checkValuePresence(dataToUse, cardName) ? (
            <Card
              className={className}
              formData={dataToUse[cardName]}
              key={id}
            />
          ) : null;

          accumulator[cardArray] = accumulator[cardArray] ?? [];
          accumulator[cardArray] = accumulator[cardArray]
            .filter((card) => card !== null)
            .concat(card);

          accumulator.hasValue = accumulator.hasValue ?? {};
          accumulator.hasValue[cardArray] = accumulator[cardArray][0] !== null;

          return accumulator;
        }, {})
      : null;

    const {
      certificates,
      contact,
      education,
      hasValue,
      languages,
      personalInfo,
      skills,
      workExperiences,
    } = cards;

    return (
      <div id="Cv">
        <div id="personalInfoAvatar">
          {personalInfo}
          <Avatar />
        </div>
        <div id="workEducation">
          <div id="workExperiencesCV">
            <h2 className="cvTitle">
              {hasValue?.workExperiences ? 'Work Experience' : null}
            </h2>
            {workExperiences}
          </div>
          <div id="educationCv">
            <h2 className="cvTitle">
              {hasValue?.education ? 'Education' : null}
            </h2>
            {education}
          </div>
        </div>
        <div id="cscl">
          <h2 className="cvTitle">
            {hasValue?.contact ? 'Contact Details' : null}
          </h2>
          {contact}
          <h2 className="cvTitle">{hasValue?.skills ? 'Skills' : null}</h2>
          {skills}
          <h2 className="cvTitle">
            {hasValue?.certificates ? 'Certificates' : null}
          </h2>
          {certificates}
          <h2 className="cvTitle">
            {hasValue?.languages ? 'Languages' : null}
          </h2>
          {languages}
        </div>
      </div>
    );
  }
}

export default Cv;
