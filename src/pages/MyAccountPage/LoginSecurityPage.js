import { useState, useRef } from "react";
import StyledInputLabel from "../../components/InputLabel/InputLabel";
import StyledMyAccountTitle from "../../components/MyAccountTitle/MyAccountTitle";
import {
  ConnectedDevice,
  LineBreak,
  LoginSecurityContainer,
  StyledColumnDiv,
  StyledRowDiv,
  StyledText,
} from "./MyAccountPageElements";
import { MdLaptopWindows, MdOutlinePhoneIphone } from "react-icons/md";
import StyledPageButton from "../../components/PageButton/PageButton";
import { StyledLoginFormInput } from "../../components/LoginFormInput";
import React from "react";

const LoginSecurityPage = () => {
  // states
  const [accountPassword, setAccountPassword] = useState({
    currentPassword: { value: "", isOpened: false },
    newPassword: { value: "Male", isOpened: false },
    confirmNewPassword: { value: "", isOpened: false },
  });

  //refs
  const currentPasswordRef = useRef(null);
  const newPasswordRef = useRef(null);
  const confirmNewPasswordRef = useRef(null);

  const handleEditButtonClick = (property) => {
    let newAccountPassword = { ...accountPassword };
    newAccountPassword[property].isOpened =
      !newAccountPassword[property].isOpened;
    setAccountPassword(newAccountPassword);

    switch (property) {
      case "current":
        currentPasswordRef.current.value = newAccountPassword[property].value;
        break;
      case "new":
        newPasswordRef.current.value = newAccountPassword[property].value;
        break;
      case "confirm":
        confirmNewPasswordRef.current.value = newAccountPassword;
        break;
      default:
        break;
    }
  };

  return (
    <LoginSecurityContainer accountPassword={accountPassword}>
      {/* Password */}
      <div id='password'>
        <StyledRowDiv>
          <StyledInputLabel text='Password' />
          <button onClick={() => handleEditButtonClick("currentPassword")}>
            {accountPassword.currentPassword.isOpened ? "Close" : "Edit"}
          </button>
        </StyledRowDiv>
        <StyledColumnDiv className='updatePassword'>
          <StyledInputLabel text='Current password' />
          <StyledLoginFormInput ref={currentPasswordRef} />
          <StyledInputLabel text='New password' />
          <StyledLoginFormInput ref={currentPasswordRef} />
          <StyledInputLabel text='Confirm new password' />
          <StyledLoginFormInput ref={currentPasswordRef} />

          <StyledPageButton
            text='Save'
            color={true}
            // onclick={() => handleChange("email", emailRef.current.value)}
          />
        </StyledColumnDiv>
        <StyledText className='passwordMessageVisibility'>
          Last updated 3 weeks ago
        </StyledText>
        <LineBreak />
      </div>
      {/* Title */}
      <StyledMyAccountTitle text='Social accounts' />
      {/* Facebook*/}
      <StyledRowDiv>
        <StyledInputLabel text='Facebook' />
        <button>Connect</button>
      </StyledRowDiv>
      <StyledText>Not connected</StyledText>
      <LineBreak />
      {/* Google */}
      <StyledRowDiv>
        <StyledInputLabel text='Google' />
        <button>Disconnect</button>
      </StyledRowDiv>
      <StyledText>Connected</StyledText>
      <LineBreak />
      {/* Title */}
      <StyledMyAccountTitle text='Recent login activity' />
      {/* Windows 10  */}
      <ConnectedDevice>
        <MdLaptopWindows />
        <StyledRowDiv>
          <div>
            <StyledInputLabel text='Windows 10 - Chrome' />
            <StyledText>Suceava, SV - 25.05.2022 at 13:14</StyledText>
          </div>
          <button>Log out device</button>
        </StyledRowDiv>
      </ConnectedDevice>
      <LineBreak />
      {/* Ios */}{" "}
      <ConnectedDevice>
        <MdOutlinePhoneIphone />
        <StyledRowDiv>
          <div>
            <StyledInputLabel text='IOS 15.2 - Chrome Mobile' />
            <StyledText>Pitesti, AG - 10.06.2022 at 07:32</StyledText>
          </div>
          <button>Log out device</button>
        </StyledRowDiv>
      </ConnectedDevice>
      <LineBreak />
      {/* Title */}
      <StyledMyAccountTitle text='Account' />
      {/* Address */}
      <StyledRowDiv>
        <StyledText>Deactivate your account</StyledText>
        <button className='redTextColor'>Deactivate</button>
      </StyledRowDiv>
      <LineBreak />
    </LoginSecurityContainer>
  );
};

export default LoginSecurityPage;
