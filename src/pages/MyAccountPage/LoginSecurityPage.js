import React from "react";
import StyledFormTitle from "../../components/FormTitle/FormTitle";
import StyledInputLabel from "../../components/InputLabel/InputLabel";
import {
  LineBreak,
  ProfileContainer,
  StyledRowDiv,
  StyledText,
} from "./MyAccountPageElements";

const LoginSecurityPage = () => {
  return (
    <ProfileContainer>
      {/* Password */}
      <StyledRowDiv>
        <StyledInputLabel text="Password" />
        <button>Update</button>
      </StyledRowDiv>
      <StyledText>Last updated 3 weeks ago</StyledText>
      <LineBreak />
      {/* Title */}
      <StyledFormTitle text="Social accounts" />
      {/* Facebook*/}
      <StyledRowDiv>
        <StyledInputLabel text="Facebook" />
        <button>Connect</button>
      </StyledRowDiv>
      <StyledText>Not connected</StyledText>
      <LineBreak />
      {/* Google */}
      <StyledRowDiv>
        <StyledInputLabel text="Google" />
        <button>Disconnect</button>
      </StyledRowDiv>
      <StyledText>Connected</StyledText>
      <LineBreak />
      {/* Title */}
      <StyledFormTitle text="Recent login activity" />
      {/* Windows 10  */}
      <StyledRowDiv>
        <StyledInputLabel text="Windows 10 - Chrome" />
        <button>Log out device</button>
      </StyledRowDiv>
      <StyledText>Suceava, SV - 25.05.2022 at 13:14</StyledText>
      <LineBreak />
      {/* Ios */}
      <StyledRowDiv>
        <StyledInputLabel text="IOS 15.2 - Chrome Mobile" />
        <button>Log out device</button>
      </StyledRowDiv>
      <StyledText>Pitesti, AG - 10.06.2022 at 07:32</StyledText>
      <LineBreak />
      {/* Title */}
      <StyledFormTitle text="Account" />
      {/* Address */}
      <StyledRowDiv>
        <StyledText>Deactivate your account</StyledText>
        <button className="redTextColor">Deactivate</button>
      </StyledRowDiv>
      <LineBreak />
    </ProfileContainer>
  );
};

export default LoginSecurityPage;
