import styled from 'styled-components'
import LogoAssist from '../assets/images/assistLogo.png';

const AssistLogoHeader = () => {
    return ( <
        Logo / >
    )
}

export default AssistLogoHeader

export const Logo = styled.div `
    height: 45px;
    width: 120px;
    background-image: url(${LogoAssist}) ;
    background-size: cover;
    position: relative !important;
    top: 12px !important;
    left: 30px;
`