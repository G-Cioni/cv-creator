import React, { Component } from 'react';

class Image extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      preview: null,
    };
  }

  onChange(e) {
    this.setState((state) => {
      return {
        ...state,
        image: e.target.files[0],
      };
    });
  }

  componentDidUpdate() {
    const { image } = this.state;
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () =>
        this.setState((state) => {
          return {
            ...state,
            preview: reader.result,
          };
        });
      reader.readAsDataURL(image);
    }
  }
  render() {
    const { image, preview } = this.state;
    return (
      <div>
        <input
          type="file"
          onChange={(e) => this.onChange(e)}
          accept="image/*"
        />
        <img src={preview} />
      </div>
    );
  }
}

export default Image;
