import emptyAvatar from '../../images/emptyAvatar.jpg';
import React, { Component } from 'react';

class Avatar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      preview: emptyAvatar,
    };
  }

  onChange(e) {
    const newAvatar = e.target.files[0];
    const newAvatarType = newAvatar ? newAvatar.type.substr(0, 5) : null;
    if (newAvatar && newAvatarType === 'image') {
      const reader = new FileReader();
      reader.onloadend = () =>
        this.setState((state) => {
          return {
            ...state,
            image: newAvatar,
            preview: reader.result,
          };
        });
      reader.readAsDataURL(newAvatar);
    }
  }

  render() {
    const fileInputRef = React.createRef();
    const { preview } = this.state;
    return (
      <div id="avatar">
        {/*File input field is hidden. Image or Span must be clicked to upload a photo*/}
        <input
          type="file"
          onChange={(e) => this.onChange(e)}
          accept="image/*"
          style={{ display: 'none' }}
          ref={fileInputRef}
        />
        <img
          src={preview}
          alt={'profilePic'}
          onClick={() => {
            fileInputRef.current.click();
          }}
        />
        {preview === emptyAvatar ? (
          <span
            onClick={() => {
              fileInputRef.current.click();
            }}
          >
            Click image to upload
          </span>
        ) : null}
      </div>
    );
  }
}

export default Avatar;
