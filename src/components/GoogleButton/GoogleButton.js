import { FcGoogle } from 'react-icons/fc';
import { Button } from './GoogleButtonStyle';
import React from 'react';
const StyledGoogleButton = ({ text }) => {
  return (
    <Button>
      <FcGoogle />
      <span>{text}</span>
    </Button>
  );
};

export default StyledGoogleButton;
