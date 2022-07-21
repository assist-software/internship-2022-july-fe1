import { StyledButtonText, StyledButton } from './ProfileButtonStyle';
import React from 'react';
const StyledProfileButton = ({ icon, text, selected, pathname }) => {
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
