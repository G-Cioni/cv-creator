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
          const { inputValue: text, id, name: className } = formData[detail];
          //todo consider rendering different html tags instead of always a div
          return (
            <div key={id} className={className}>
              {text}
            </div>
          );
        })
      : null;

    return <div className="card">{details}</div>;
  }
}

export default Card;
