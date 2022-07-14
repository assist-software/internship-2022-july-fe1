import styled from "styled-components"

const InputLabel = ({text}) => {
  return (
    <Label>{text}</Label>
  )
}

export default InputLabel

const Label = styled.h1`
    color: #4D5464;
    font-size: 14px;
    font-weight: 500;
`