import React,{useState} from 'react'
import { LeftSide, MainContainer, LoginImage, ContentContainer } from './LoginPageElements';
import ImageLogin from "../../assets/images/furniture.png";
import AssistLogo from '../../components/AssistLogo';
import CreateAccountForm from './CreateAccountForm';
import LogInForm from './LogInForm';
import ForgotPasswordForm from './ForgotPasswordForm';
import ResetPasswordForm from './ResetPasswordForm';

const OnBoarding = ({pageName}) => {
  

  return (
    <MainContainer>
        <LeftSide>
          <ContentContainer>
            <AssistLogo />
            {/* Create account */}
            {pageName=="createAccount" && <CreateAccountForm />}
            {/* Log in */}
            {pageName=="logIn" && <LogInForm/>
            }
            {/* Forgot password */}
            {pageName=="forgotPassword" && <ForgotPasswordForm />
            }
             {/* Reset password */}
             {pageName=="resetPassword" && <ResetPasswordForm/>
            }
          </ContentContainer>
        </LeftSide>
        <LoginImage src={ImageLogin} alt="Login image"/>
    </MainContainer>
  )
}

export default OnBoarding
