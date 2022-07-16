import { useState } from 'react';
import StyledInputLabel from '../../components/InputLabel/InputLabel';
import { StyledLoginFormInput } from '../../components/LoginFormInput';
import StyledPageButton from '../../components/PageButton/PageButton';
import {
  LineBreak,
  ProfileContainer,
  StyledColumnDiv,
  StyledRowDiv,
  StyledText,
} from './MyAccountPageElements';
import Select from 'react-select';

const ProfilePage = () => {
  const [userData, setUserData] = useState({
    name: { value: { firstName: '', lastName: '' }, isOpened: false },
    gender: { value: '', isOpened: false },
    dateOfBirth: { value: '', isOpened: false },
    email: { value: '', isOpened: false },
    phoneNumber: { value: '', isOpened: false },
    address: { value: '', isOpened: false },
  });

  const handleEditButtonClick = (property) => {
    let newUserData = { ...userData };
    newUserData[property].isOpened = !newUserData[property].isOpened;
    setUserData(newUserData);
  };

  return (
    <ProfileContainer userData={userData}>
      {/* Full name */}
      <StyledRowDiv>
        <StyledInputLabel text='Full name' />
        <button onClick={() => handleEditButtonClick('name')}>
          {userData.name.isOpened ? 'Close' : 'Edit'}
        </button>
      </StyledRowDiv>
      <StyledColumnDiv className='updateName'>
        <StyledRowDiv>
          <div className='longInput'>
            <StyledInputLabel text='First name' />
            <StyledLoginFormInput />
          </div>
          <div className='longInput'>
            <StyledInputLabel text='Last name' />
            <StyledLoginFormInput />
          </div>
        </StyledRowDiv>
        <StyledPageButton text='Save' color={true} />
      </StyledColumnDiv>
      <StyledText>
        {userData.name.value.firstName + ' ' + userData.name.value.lastName}
      </StyledText>
      <LineBreak />
      {/* Gender */}
      <StyledRowDiv>
        <StyledInputLabel text='Gender' />
        <button onClick={() => handleEditButtonClick('gender')}>
          {userData.gender.isOpened ? 'Close' : 'Edit'}
        </button>
      </StyledRowDiv>
      <StyledColumnDiv className='updateGender'>
        <Select
          options={options}
          styles={customStyles}
          placeholder={
            <div className='select-placeholder-text'>Select gender</div>
          }
        />
        <StyledPageButton text='Save' color={true} />
      </StyledColumnDiv>
      <StyledText>{userData.gender.value}</StyledText>
      <LineBreak />
      {/* Date of birth */}
      <StyledRowDiv>
        <StyledInputLabel text='Date of birth' />
        <button onClick={() => handleEditButtonClick('dateOfBirth')}>
          {userData.dateOfBirth.isOpened ? 'Close' : 'Edit'}
        </button>
      </StyledRowDiv>
      <StyledColumnDiv className='updateDateOfBirth'>
        <input type={'date'} />
        <StyledPageButton text='Save' color={true} />
      </StyledColumnDiv>
      <StyledText>{userData.dateOfBirth.value}</StyledText>
      <LineBreak />
      {/* Email address */}
      <StyledRowDiv>
        <StyledInputLabel text='Email address' />
        <button onClick={() => handleEditButtonClick('email')}>
          {userData.email.isOpened ? 'Close' : 'Edit'}
        </button>
      </StyledRowDiv>
      <StyledColumnDiv className='updateEmail'>
        {/* <div className='longInput'> */}
        <StyledLoginFormInput />
        {/* </div> */}
        <StyledPageButton text='Save' color={true} />
      </StyledColumnDiv>
      <StyledText>{userData.email.value}</StyledText>
      <LineBreak />
      {/* Phone number */}
      <StyledRowDiv>
        <StyledInputLabel text='Phone number' />
        <button onClick={() => handleEditButtonClick('phoneNumber')}>
          {userData.phoneNumber.isOpened ? 'Close' : 'Edit'}
        </button>
      </StyledRowDiv>
      <StyledColumnDiv className='updatePhoneNumber'>
        {/* <div className='longInput'> */}
        <StyledLoginFormInput />
        {/* </div> */}
        <StyledPageButton text='Save' color={true} />
      </StyledColumnDiv>
      <StyledText>{userData.phoneNumber.value}</StyledText>
      <LineBreak />
      {/* Address */}
      <StyledRowDiv>
        <StyledInputLabel text='Address' />
        <button onClick={() => handleEditButtonClick('address')}>
          {userData.address.isOpened ? 'Close' : 'Edit'}
        </button>
      </StyledRowDiv>
      <StyledColumnDiv className='updateAddress'>
        {/* <div className='longInput'> */}
        <StyledLoginFormInput />
        {/* </div> */}
        <StyledPageButton text='Save' color={true} />
      </StyledColumnDiv>
      <StyledText>{userData.address.value}</StyledText>
      <LineBreak />
    </ProfileContainer>
  );
};

export default ProfilePage;

const options = [
  { value: 'male', label: 'Male' },
  { value: 'female', label: 'Female' },
];

const customStyles = {
  control: (base) => ({
    ...base,
    height: 44,
    minHeight: 44,
    borderRadius: 8,
    marginBottom: 20,
    marginTop: 20,
  }),
};
