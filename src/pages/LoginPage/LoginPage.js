import React from 'react'
import { LeftSide, MainContainer, LoginImage, ContentContainer, LoginForm, BreakLine } from './LoginPageElements';
import ImageLogin from "../../assets/images/furniture.png";
import AssistLogo from '../../components/AssistLogo';
import FormTitle from '../../components/FormTitle';
import FormLabel from '../../components/FormLabel';
// import {GoogleLogin} from 'react-google-login'

const clientId = 'YOUR_CLIENT_ID.apps.googleeusearchcontent.com';

const LoginPage = () => {
  const onSuccess = (res) => {
    alert('[Login Succes] currentUser:', res.profileObj);
  }
  const onFailure = (res) => {
    alert('[Login Failed] res',res);
  }

  return (
    <MainContainer>
        <LeftSide>
          <ContentContainer>
            <AssistLogo />
            <LoginForm>
              <FormTitle text="Create account"/>
              <FormLabel text="Sign up for free and become a member."/>
              {/* <GoogleLogin
                clientId={clientId}
                buttonText="Sign up with Google"
                onSuccess={onSuccess}
                onFailure={onFailure}
                className={"Google"}
                
                cookiePolicy={'single_host_origin'}
                style={{textAlign: 'center'}}
              /> */}
              <BreakLine>
                <hr/>
                <p>OR</p>
              </BreakLine>
            </LoginForm>
          </ContentContainer>
        </LeftSide>
        <LoginImage src={ImageLogin} alt="Login image"/>
    </MainContainer>
  )
}

export default LoginPage
