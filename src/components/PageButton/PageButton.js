import React from "react";
import { StyledButton } from "./PageButtonStyle";

const StyledPageButton = ({ text, color }) => {
  return <StyledButton bcolor={color}>{text}</StyledButton>;
};

export default StyledPageButton;
