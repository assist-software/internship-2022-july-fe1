import styled from "styled-components"

const FormTitle = ({text}) => {
  return (
    <Title>
        {text}
    </Title>
  )
}

export default FormTitle

const Title = styled.h1`
    color: #1C1C1E;
    font-size: 32px;
    line-height: 32px;
    font-weight: 700;
    margin: 5px 0;
`