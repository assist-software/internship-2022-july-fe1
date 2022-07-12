import styled from 'styled-components'
import LogoAssist from '../assets/images/assistLogo.png';

const AssistLogo = () => {
  return (
    <Logo/>
  )
}

export default AssistLogo

export const Logo = styled.div`
    height: 60px;
    width: 160px;
    background-image: url(${LogoAssist}) ;
    background-size: cover;
`