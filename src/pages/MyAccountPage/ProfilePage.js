import { useState } from 'react';
import StyledInputLabel from '../../components/InputLabel/InputLabel';
import {
  LineBreak,
  ProfileContainer,
  StyledRowDiv,
  StyledText,
} from './MyAccountPageElements';

const ProfilePage = () => {
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    dateOfBirth: '',
    email: '',
    phoneNumber: '',
    address: '',
  });

  return (
    <ProfileContainer>
      {/* Full name */}
      <StyledRowDiv>
        <StyledInputLabel text='Full name' />
        <button>Edit</button>
      </StyledRowDiv>
      <StyledText>{userData.firstName + ' ' + userData.lastName}</StyledText>
      <LineBreak />
      {/* Gender */}
      <StyledRowDiv>
        <StyledInputLabel text='Gender' />
        <button>Edit</button>
      </StyledRowDiv>
      <StyledText>{userData.gender}</StyledText>
      <LineBreak />
      {/* Date of birth */}
      <StyledRowDiv>
        <StyledInputLabel text='Date of birth' />
        <button>Edit</button>
      </StyledRowDiv>
      <StyledText>{userData.dateOfBirth}</StyledText>
      <LineBreak />
      {/* Email address */}
      <StyledRowDiv>
        <StyledInputLabel text='Email address' />
        <button>Edit</button>
      </StyledRowDiv>
      <StyledText>{userData.email}</StyledText>
      <LineBreak />
      {/* Phone number */}
      <StyledRowDiv>
        <StyledInputLabel text='Phone number' />
        <button>Edit</button>
      </StyledRowDiv>
      <StyledText>{userData.phoneNumber}</StyledText>
      <LineBreak />
      {/* Address */}
      <StyledRowDiv>
        <StyledInputLabel text='Address' />
        <button>Edit</button>
      </StyledRowDiv>
      <StyledText>{userData.address}</StyledText>
      <LineBreak />
    </ProfileContainer>
  );
};

export default ProfilePage;
