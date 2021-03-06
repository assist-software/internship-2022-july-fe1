import { useEffect, useRef, useState } from "react";
import StyledInputLabel from "../../components/InputLabel/InputLabel";
import { StyledLoginFormInput } from "../../components/LoginFormInput";
import StyledPageButton from "../../components/PageButton/PageButton";
import {
  LineBreak,
  ProfileContainer,
  StyledColumnDiv,
  StyledRowDiv,
  StyledText,
} from "./MyAccountPageElements";
import Select from "react-select";
import React from "react";
import { useGlobalAuthContext } from "../../Context/authContext";

const ProfilePage = () => {
  const { userDataContext, editUserData } = useGlobalAuthContext();
  console.log(userDataContext);

  console.log(userDataContext.email);
  // states
  const [userData, setUserData] = useState({
    name: { value: { firstName: "", lastName: "" }, isOpened: false },
    gender: { value: "", isOpened: false },
    dateOfBirth: { value: "", isOpened: false },
    email: { value: "", isOpened: false },
    phoneNumber: { value: "", isOpened: false },
    address: { value: "", isOpened: false },
  });

  useEffect(() => {
    let userGender = userDataContext.gender === 0 ? "Male" : "Female";
    let date = userDataContext.dateOfBirth;
    let first_name = "";
    let last_name = "";
    if (typeof userDataContext.fullName !== "undefined") {
      let fullName = userDataContext.fullName.split(" ");
      first_name = fullName[0];
      if (typeof fullName[1] !== "undefined") last_name = fullName[1];
    }

    setUserData({
      name: {
        value: {
          firstName: first_name,
          lastName: last_name,
        },
        isOpened: false,
      },
      gender: { value: userGender, isOpened: false },
      dateOfBirth: { value: date, isOpened: false },
      email: { value: userDataContext.email, isOpened: false },
      phoneNumber: { value: userDataContext.phoneNumber, isOpened: false },
      address: { value: userDataContext.address, isOpened: false },
    });
  }, [userDataContext]);

  // refs
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const dateOfBirthRef = useRef(null);
  const emailRef = useRef(null);
  const phoneNumberRef = useRef(null);
  const addressRef = useRef(null);

  const handleEditButtonClick = (property) => {
    let newUserData = { ...userData };
    newUserData[property].isOpened = !newUserData[property].isOpened;
    setUserData(newUserData);

    switch (property) {
      case "name":
        firstNameRef.current.value = newUserData[property].value.firstName;
        lastNameRef.current.value = newUserData[property].value.lastName;
        break;
      case "email":
        emailRef.current.value = newUserData[property].value;
        console.log("EMAILREF:" + emailRef.current.value);
        break;
      case "dateOfBirth":
        dateOfBirthRef.current.value = newUserData[property].value;
        break;
      case "phoneNumber":
        phoneNumberRef.current.value = newUserData[property].value;
        break;
      case "address":
        addressRef.current.value = newUserData[property].value;
        break;
      default:
        break;
    }
  };

  const handleChange = (property, value) => {
    let newUserData = { ...userData };
    if (property === "name") {
      let fullName = value.split("%");
      newUserData[property].value.firstName = fullName[0];
      newUserData[property].value.lastName = fullName[1];
    } else newUserData[property].value = value;
    setUserData(newUserData);

    const tempUserData = {
      ...userDataContext,
      fullName:
        userData.name.value.firstName + " " + userData.name.value.lastName,
      gender: userData.gender.value,
      dateOfBirth: userData.dateOfBirth.value,
      email: userData.email.value,
      phone: userData.phoneNumber.value,
      address: userData.address.value,
    };

    editUserData(tempUserData);
  };

  const [selectedValue, setSelectedValue] = useState(userData.gender.value);

  // handle onChange event of the dropdown
  const handleGenderChange = (e) => {
    setSelectedValue(e.label);
  };

  return (
    <ProfileContainer userData={userData}>
      {/* Full name */}
      <div id='name'>
        <StyledRowDiv>
          <StyledInputLabel text='Full name' />
          <button onClick={() => handleEditButtonClick("name")}>
            {userData.name.isOpened ? "Close" : "Edit"}
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
            onclick={() => {
              handleChange(
                "name",
                firstNameRef.current.value + "%" + lastNameRef.current.value
              );
              handleEditButtonClick("name");
              console.log(
                userData.name.value.firstName +
                  " " +
                  userData.name.value.lastName
              );
            }}
          />
        </StyledColumnDiv>
        <StyledText className='nameVisibility'>
          {userData.name.value.firstName + " " + userData.name.value.lastName}
        </StyledText>
        <LineBreak />
      </div>
      {/* Gender */}
      <div id='gender'>
        <StyledRowDiv>
          <StyledInputLabel text='Gender' />
          <button onClick={() => handleEditButtonClick("gender")}>
            {userData.gender.isOpened ? "Close" : "Edit"}
          </button>
        </StyledRowDiv>
        <StyledColumnDiv className='updateGender'>
          <Select
            options={options}
            styles={customStyles}
            placeholder={
              <div className='select-placeholder-text'> Select gender </div>
            }
            onChange={handleGenderChange}
            defaultValue={{ label: selectedValue }}
          />

          <StyledPageButton
            text='Save'
            color={true}
            onclick={() => {
              handleChange("gender", selectedValue);
              handleEditButtonClick("gender");
            }}
          />
        </StyledColumnDiv>
        <StyledText className='genderVisibility'>
          {userData.gender.value}
        </StyledText>
        <LineBreak />
      </div>
      {/* Date of birth */}
      <div id='dateOfBirth'>
        <StyledRowDiv>
          <StyledInputLabel text='Date of birth' />
          <button onClick={() => handleEditButtonClick("dateOfBirth")}>
            {userData.dateOfBirth.isOpened ? "Close" : "Edit"}
          </button>
        </StyledRowDiv>
        <StyledColumnDiv className='updateDateOfBirth'>
          <input type={"date"} ref={dateOfBirthRef} />
          <StyledPageButton
            text='Save'
            color={true}
            onclick={() => {
              handleChange("dateOfBirth", dateOfBirthRef.current.value);
              handleEditButtonClick("dateOfBirth");
            }}
          />
        </StyledColumnDiv>
        <StyledText className='dateOfBirthVisibility'>
          {userData.dateOfBirth.value}
        </StyledText>
        <LineBreak />
      </div>
      {/* Email address */}
      <div id='email'>
        <StyledRowDiv>
          <StyledInputLabel text='Email address' />
          <button onClick={() => handleEditButtonClick("email")}>
            {userData.email.isOpened ? "Close" : "Edit"}
          </button>
        </StyledRowDiv>
        <StyledColumnDiv className='updateEmail'>
          <StyledLoginFormInput ref={emailRef} />
          <StyledPageButton
            text='Save'
            color={true}
            onclick={() => {
              handleChange("email", emailRef.current.value);
              handleEditButtonClick("email");
            }}
          />
        </StyledColumnDiv>
        <StyledText className='emailVisibility'>
          {userData.email.value}
          {/* {userDataContext.email} */}
        </StyledText>
        <LineBreak />
      </div>
      {/* Phone number */}
      <div id='phoneNumber'>
        <StyledRowDiv>
          <StyledInputLabel text='Phone number' />
          <button onClick={() => handleEditButtonClick("phoneNumber")}>
            {userData.phoneNumber.isOpened ? "Close" : "Edit"}
          </button>
        </StyledRowDiv>
        <StyledColumnDiv className='updatePhoneNumber'>
          <StyledLoginFormInput
            ref={phoneNumberRef}
            onKeyPress={(event) => {
              if (!/[0-9+]/.test(event.key)) {
                event.preventDefault();
              }
            }}
            maxLength={16}
          />
          <StyledPageButton
            text='Save'
            color={true}
            onclick={() => {
              handleChange("phoneNumber", phoneNumberRef.current.value);
              handleEditButtonClick("phoneNumber");
            }}
          />
        </StyledColumnDiv>
        <StyledText className='phoneNumberVisibility'>
          {userData.phoneNumber.value}
        </StyledText>
        <LineBreak />
      </div>
      {/* Address */}
      <div id='address'>
        <StyledRowDiv>
          <StyledInputLabel text='Address' />
          <button onClick={() => handleEditButtonClick("address")}>
            {userData.address.isOpened ? "Close" : "Edit"}
          </button>
        </StyledRowDiv>
        <StyledColumnDiv className='updateAddress'>
          <StyledLoginFormInput ref={addressRef} />
          <StyledPageButton
            text='Save'
            color={true}
            onclick={() => {
              handleChange("address", addressRef.current.value);
              handleEditButtonClick("address");
            }}
          />
        </StyledColumnDiv>
        <StyledText className='addressVisibility'>
          {userData.address.value}
        </StyledText>
        <LineBreak />
      </div>
    </ProfileContainer>
  );
};

export default ProfilePage;

const options = [
  { value: 0, label: "Male" },
  { value: 1, label: "Female" },
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
  menu: (base) => ({
    ...base,
    marginTop: -18,
  }),

  option: (base) => ({
    ...base,
    fontWeight: 400,
  }),
  singleValue: (base) => ({
    ...base,
    fontWeight: 400,
  }),
};
