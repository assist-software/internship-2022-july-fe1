import styled from 'styled-components';

export const StyledImageContainer = styled.div`
  width: 100%;
  height: 110px;
  display: flex;
  flex-direction: column;
  margin: 0 0 30px 0;
  align-items: center;

  .image-upload > input {
    display: none;
  }
`;

export const StyledProfileImage = styled.img`
  width: 110px;
  height: 110px;
  border-radius: 50%;
  object-fit: cover;
`;

export const EditProfileImageButton = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #0356eb;
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.16);
  cursor: pointer;
  position: relative;
  top: -32px;
  left: 38px;
`;
