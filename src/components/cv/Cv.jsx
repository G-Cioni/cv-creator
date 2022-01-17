import { checkValuePresence, getCardDetails } from '../../helpers/utils';
import Card from './Card';
import React, { Component } from 'react';
import Image from './Image';
import emptyAvatar from '../../images/emptyAvatar.png';

class Cv extends Component {
  // Creates a cards object which will be rendered in JSX

  render() {
    const { allFormsData } = this.props;
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
        <Image />
        <div id="personalContact">
          {personalInfo}
          {contact}
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
        <div id="scl">
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
