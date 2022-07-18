import React from 'react';
import { HiMenu } from 'react-icons/hi';
import { TbLayoutGrid } from 'react-icons/tb';
import { StyledDiv } from './HamburgerMenuStyle';

import { useGlobalContext } from '../../Context/appContext';

const StyledHamburgerMenu = () => {
  const { setDisplayWide } = useGlobalContext();

  return (
    <StyledDiv>
      <TbLayoutGrid onClick={() => setDisplayWide(false)} />
      <HiMenu onClick={() => setDisplayWide(true)} />
    </StyledDiv>
  );
};

export default StyledHamburgerMenu;
