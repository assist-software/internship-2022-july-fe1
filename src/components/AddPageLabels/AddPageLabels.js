import { StyledDiv, StyledLabel, StyledParagraph } from "./AddPageLabelsStyle";

const StyledAddPageLabels = ({ labelText, paragraphText }) => {
  return (
    <StyledDiv>
      <StyledLabel>{labelText}</StyledLabel>
      <StyledParagraph>{paragraphText}</StyledParagraph>
    </StyledDiv>
  );
};

export default StyledAddPageLabels;
