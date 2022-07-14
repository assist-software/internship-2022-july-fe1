import styled from "styled-components"

const TextLabel = ({ text }) => {
    return ( 
    <TxtLabel > { text } </TxtLabel>
    )
}

export default TextLabel

export const TxtLabel = styled.h1 `
  color: #0241AE;
  font-size: 14px;
  font-weight: 500;

`