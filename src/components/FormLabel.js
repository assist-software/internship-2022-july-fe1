import styled from "styled-components"

const FormLabel = ({ text }) => {
    return ( 
    <Label > { text } </Label>
    )
}

export default FormLabel

const Label = styled.label `
    color: #98A2B3;
    font-size: 14px;
    margin: 0 0 10px 0;
`