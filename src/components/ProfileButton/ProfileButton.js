import { StyledButtonText, StyledButton } from "./ProfileButtonStyle";
import React from "react";
import { useGlobalAuthContext } from "../../Context/authContext";

const StyledProfileButton = ({ icon, text, selected, pathname }) => {
  const { userData } = useGlobalAuthContext(); // request data from API

  return (
    <StyledButton selected={selected}>
      {icon}
      <StyledButtonText selected={selected} to={`${pathname}`}>
        {text}
      </StyledButtonText>
    </StyledButton>
  );
};

export default StyledProfileButton;
