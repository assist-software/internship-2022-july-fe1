import React from 'react'
import { LeftSide, MainContainer, LoginImage, ContentContainer } from './LoginPageElements';
import ImageLogin from "../../assets/images/furniture.png";
import AssistLogo from '../../components/AssistLogo';

const LoginPage = () => {
  return (
    <MainContainer>
        <LeftSide>
          <ContentContainer>
            <AssistLogo />
            {/* <LoginForm>
              <FormTitle text=""/>
            </LoginForm> */}
          </ContentContainer>
        </LeftSide>
        <LoginImage src={ImageLogin} alt="Login image"/>
    </MainContainer>
  )
}

export default LoginPage
