import React, { Component } from 'react';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { formData } = this.props;
    const details = formData
      ? Object.keys(formData).map((detail) => {
          const text = formData[detail].inputValue;
          const id = formData[detail].id;
          return <div key={id}>{text}</div>;
        })
      : null;

    return <div className="card">{details}</div>;
  }
}

export default Card;
