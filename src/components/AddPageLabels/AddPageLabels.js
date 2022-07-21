import { StyledDiv, StyledLabel, StyledParagraph } from './AddPageLabelsStyle';
import React from 'react';
const StyledAddPageLabels = ({ labelText, paragraphText }) => {
  return (
    <StyledDiv>
      <StyledLabel>{labelText}</StyledLabel>
      <StyledParagraph>{paragraphText}</StyledParagraph>
    </StyledDiv>
  );
};

export default StyledAddPageLabels;
