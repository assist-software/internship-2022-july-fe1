import React from "react";
import StyledInputLabel from "../../components/InputLabel/InputLabel";
import {
  LineBreak,
  ProfileContainer,
  StyledRowDiv,
  StyledText,
} from "./MyAccountPageElements";

const ProfilePage = () => {
  return (
    <ProfileContainer>
      {/* Full name */}
      <StyledRowDiv>
        <StyledInputLabel text="Full name" />
        <button>Edit</button>
      </StyledRowDiv>
      <StyledText>Mama</StyledText>
      <LineBreak />
      {/* Gender */}
      <StyledRowDiv>
        <StyledInputLabel text="Gender" />
        <button>Edit</button>
      </StyledRowDiv>
      <StyledText>Mama</StyledText>
      <LineBreak />
      {/* Date of birth */}
      <StyledRowDiv>
        <StyledInputLabel text="Date of birth" />
        <button>Edit</button>
      </StyledRowDiv>
      <StyledText>Mama</StyledText>
      <LineBreak />
      {/* Email address */}
      <StyledRowDiv>
        <StyledInputLabel text="Email address" />
        <button>Edit</button>
      </StyledRowDiv>
      <StyledText>Mama</StyledText>
      <LineBreak />
      {/* Phone number */}
      <StyledRowDiv>
        <StyledInputLabel text="Phone number" />
        <button>Edit</button>
      </StyledRowDiv>
      <StyledText>Mama</StyledText>
      <LineBreak />
      {/* Address */}
      <StyledRowDiv>
        <StyledInputLabel text="Address" />
        <button>Edit</button>
      </StyledRowDiv>
      <StyledText>Mama</StyledText>
      <LineBreak />
    </ProfileContainer>
  );
};

export default ProfilePage;
