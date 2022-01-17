import React, { Component } from 'react';
import emptyAvatar from '../../images/emptyAvatar.png';

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
    } else {
      this.setState((state) => {
        return {
          ...state,
          image: null,
          preview: emptyAvatar,
        };
      });
    }
  }

  render() {
    const fileInputRef = React.createRef();
    const { preview } = this.state;
    return (
      <div id="avatar">
        <img
          src={preview}
          alt={'profilePic'}
          onClick={() => {
            fileInputRef.current.click();
          }}
        />
        <input
          type="file"
          onChange={(e) => this.onChange(e)}
          accept="image/*"
          style={{ display: 'none' }}
          ref={fileInputRef}
        />
        {preview === emptyAvatar ? (
          <div
            onClick={() => {
              fileInputRef.current.click();
            }}
          >
            Click image to upload
          </div>
        ) : null}
      </div>
    );
  }
}

export default Avatar;
