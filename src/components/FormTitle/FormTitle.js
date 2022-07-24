import { Title, TitleContainer } from './FormTitleStyle';


import StyledFormButton from "../../components/FormButton/FormButton";

import React from 'react';
const StyledFormTitle = ({ text, showButton, func }) => {
  return <TitleContainer>
    <Title>{text}</Title>
    {showButton && <div className='button'>
      <StyledFormButton text={'Add new'} func={func} />
    </div>
    }
  </TitleContainer>;
};

export default StyledFormTitle;
