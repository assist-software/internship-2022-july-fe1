import { StyledTitle } from './PageTitleStyle';
import React, { useEffect } from 'react';
const StyledPageTitle = ({ text }) => {

  useEffect(() => {
    // if (localStorage.getItem(email)) {
    //   text = `Welcome back, ${local}`
    // }
  }, [])

  return <StyledTitle>{text}</StyledTitle>;
};

export default StyledPageTitle;
