import { useState } from 'react';
import { HiPencil } from 'react-icons/hi';
import {
  EditProfileImageButton,
  StyledImageContainer,
  StyledProfileImage,
} from './UploadImageStyle';
import React from 'react';
import { encode } from 'js-base64';

const UploadImage = () => {
  const [imgfile, uploadimg] = useState([
    require('../../assets/images/defaultUserProfile.png'),
  ]);

  const [image, setImage] = useState('img');
  const handleImageChange = (e) => {
    e.preventDefault();
    setImage(encode(URL.createObjectURL(e.target.files[0])));
  };

  const imgFilehandler = (e) => {
    if (e.target.files.length === 1) {
      uploadimg(() => [URL.createObjectURL(e.target.files[0])]);
      handleImageChange(e);
      console.log('Image: ', image);
    } else {
      alert('Please select only one image');
    }
  };

  return (
    <StyledImageContainer className='image-upload'>
      {imgfile.map((elem) => {
        return (
          <span key={elem}>
            <StyledProfileImage src={elem} alt={elem.className} />
          </span>
        );
      })}
      {/* Convert file input into icon */}
      <label htmlFor='file-input'>
        <EditProfileImageButton>
          <HiPencil />
        </EditProfileImageButton>
      </label>
      <input type='file' id='file-input' onChange={imgFilehandler} />
    </StyledImageContainer>
  );
};
export default UploadImage;
