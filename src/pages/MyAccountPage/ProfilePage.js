import { useRef, useState } from 'react';
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
  // states
  const [userData, setUserData] = useState({
    name: { value: { firstName: 'Test', lastName: 'Test' }, isOpened: false },
    gender: { value: 'Male', isOpened: false },
    dateOfBirth: { value: '2022-07-15', isOpened: false },
    email: { value: 'test', isOpened: false },
    phoneNumber: { value: '0000000000', isOpened: false },
    address: { value: 'test', isOpened: false },
  });

  // refs
  const nameRef = useRef('');
  const firstNameRef = useRef('');
  const lastNameRef = useRef('');
  const genderRef = useRef(null);
  const dateOfBirthRef = useRef(null);
  const emailRef = useRef(null);
  const phoneNumberRef = useRef(null);
  const addressRef = useRef(null);

  const handleEditButtonClick = (property) => {
    let newUserData = { ...userData };
    newUserData[property].isOpened = !newUserData[property].isOpened;
    setUserData(newUserData);

    switch (property) {
      case 'name':
        firstNameRef.current.value = newUserData[property].value.firstName;
        lastNameRef.current.value = newUserData[property].value.lastName;
        nameRef.current.value = `${newUserData[property].value.firstName} ${newUserData[property].value.lastName}`;
        break;
      case 'gender':
        genderRef.current.value = newUserData[property].value;
        break;
      case 'email':
        emailRef.current.value = newUserData[property].value;
        break;
      case 'dateOfBirth':
        dateOfBirthRef.current.value = newUserData[property].value;
        break;
      case 'phoneNumber':
        phoneNumberRef.current.value = newUserData[property].value;
        break;
      case 'address':
        addressRef.current.value = newUserData[property].value;
        break;
      default:
        break;
    }
  };

  const handleChange = (property, value) => {
    let newUserData = { ...userData };
    newUserData[property].value = value;
    setUserData(newUserData);
  };

  return (
    <ProfileContainer userData={userData}>
      {/* Full name */}
      <div id='name'>
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
              <StyledLoginFormInput ref={firstNameRef} />
            </div>
            <div className='longInput'>
              <StyledInputLabel text='Last name' />
              <StyledLoginFormInput ref={lastNameRef} />
            </div>
          </StyledRowDiv>
          <StyledPageButton
            text='Save'
            color={true}
            onclick={() => handleChange('name', nameRef.current.value)}
          />
        </StyledColumnDiv>
        <StyledText>
          {userData.name.value.firstName + ' ' + userData.name.value.lastName}
        </StyledText>
        <LineBreak />
      </div>
      {/* Gender */}
      <div id='gender'>
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
      </div>
      {/* Date of birth */}
      <div id='dateOfBirth'>
        <StyledRowDiv>
          <StyledInputLabel text='Date of birth' />
          <button onClick={() => handleEditButtonClick('dateOfBirth')}>
            {userData.dateOfBirth.isOpened ? 'Close' : 'Edit'}
          </button>
        </StyledRowDiv>
        <StyledColumnDiv className='updateDateOfBirth'>
          <input type={'date'} ref={dateOfBirthRef} />
          <StyledPageButton
            text='Save'
            color={true}
            onclick={() =>
              handleChange('dateOfBirth', dateOfBirthRef.current.value)
            }
          />
        </StyledColumnDiv>
        <StyledText>{userData.dateOfBirth.value}</StyledText>
        <LineBreak />
      </div>
      {/* Email address */}
      <div id='email'>
        <StyledRowDiv>
          <StyledInputLabel text='Email address' />
          <button onClick={() => handleEditButtonClick('email')}>
            {userData.email.isOpened ? 'Close' : 'Edit'}
          </button>
        </StyledRowDiv>
        <StyledColumnDiv className='updateEmail'>
          <StyledLoginFormInput ref={emailRef} />

          <StyledPageButton
            text='Save'
            color={true}
            onclick={() => handleChange('email', emailRef.current.value)}
          />
        </StyledColumnDiv>
        <StyledText>{userData.email.value}</StyledText>
        <LineBreak />
      </div>
      {/* Phone number */}
      <div id='phoneNumber'>
        <StyledRowDiv>
          <StyledInputLabel text='Phone number' />
          <button onClick={() => handleEditButtonClick('phoneNumber')}>
            {userData.phoneNumber.isOpened ? 'Close' : 'Edit'}
          </button>
        </StyledRowDiv>
        <StyledColumnDiv className='updatePhoneNumber'>
          <StyledLoginFormInput ref={phoneNumberRef} />
          <StyledPageButton
            text='Save'
            color={true}
            onclick={() =>
              handleChange('phoneNumber', phoneNumberRef.current.value)
            }
          />
        </StyledColumnDiv>
        <StyledText>{userData.phoneNumber.value}</StyledText>
        <LineBreak />
      </div>
      {/* Address */}
      <div id='address'>
        <StyledRowDiv>
          <StyledInputLabel text='Address' />
          <button onClick={() => handleEditButtonClick('address')}>
            {userData.address.isOpened ? 'Close' : 'Edit'}
          </button>
        </StyledRowDiv>
        <StyledColumnDiv className='updateAddress'>
          <StyledLoginFormInput ref={addressRef} />
          <StyledPageButton
            text='Save'
            color={true}
            onclick={() => handleChange('address', addressRef.current.value)}
          />
        </StyledColumnDiv>
        <StyledText>{userData.address.value}</StyledText>
        <LineBreak />
      </div>
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
