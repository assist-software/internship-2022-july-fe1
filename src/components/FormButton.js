import styled from "styled-components"

const FormButton = ({ text }) => {
    return ( 
        <Button > { text } </Button>
    )
}

export default FormButton

const Button = styled.button `
    width: 100%;
    height: 44px;
    border-radius: 8px;
    background: #0356E8;
    border: none;
    color: #fff;
    font-size: 14px;
    cursor: pointer;
    margin: 40px 0 8px 0;

    &:hover{
        background: #0241ae;
    }

    &:active{
        background: #012b74;
    }
`