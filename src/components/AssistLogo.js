import styled from 'styled-components'
import LogoAssist from '../assets/images/assistLogo.png';

const AssistLogo = () => {
    return ( <
        Logo / >
    )
}

export default AssistLogo

export const Logo = styled.div`
    height: 35px;
    width: 110px;
    background-image: url(${LogoAssist}) ;
    background-size: cover;

    .headerLogo{
      position: relative;
      left: 40px;
    }
`