import React from "react";
import { HiMenu } from "react-icons/hi";
import { TbLayoutGrid } from "react-icons/tb";
import { StyledDiv } from "./HamburgerMenuStyle";

const StyledHamburgerMenu = () => {
  return (
    <StyledDiv>
      <TbLayoutGrid />
      <HiMenu />
    </StyledDiv>
  );
};

export default StyledHamburgerMenu;
