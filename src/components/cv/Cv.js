import React, { Component } from 'react';
import Card from './Card';

class Cv extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { allFormsData } = this.props;
    const cards = allFormsData
      ? Object.keys(allFormsData).map((card) => {
          const id = card.substring(card.indexOf('-') + 1);
          return <Card key={id} formData={allFormsData[card]} />;
        })
      : null;
    return <div id="cv">{cards}</div>;
  }
}

export default Cv;
