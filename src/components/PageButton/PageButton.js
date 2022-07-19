import React from 'react';
import { StyledButton } from './PageButtonStyle';

const StyledPageButton = ({ text, color, onclick }) => {
  return (
    <StyledButton onClick={onclick} bcolor={color}>
      {text}
    </StyledButton>
  );
};

export default StyledPageButton;
