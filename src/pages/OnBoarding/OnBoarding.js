import React from "react";
import {
  StyledLeftSide,
  StyledMainContainer,
  StyledLoginImage,
  StyledContentContainer,
} from "./LoginPageElements";
import ImageLogin from "../../assets/images/furniture.png";
import StyledAssistLogo from "../../components/AssistLogo/AssistLogo";
import CreateAccountForm from "./CreateAccountForm";
import LogInForm from "./LogInForm";
import ForgotPasswordForm from "./ForgotPasswordForm";
import ResetPasswordForm from "./ResetPasswordForm";

const OnBoarding = ({ pageName }) => {
  return (
    <StyledMainContainer>
      <StyledLeftSide>
        <StyledContentContainer>
          <StyledAssistLogo />
          {/* Create account */}
          {pageName === "createAccount" && <CreateAccountForm />}
          {/* Log in */}
          {pageName === "logIn" && <LogInForm />}
          {/* Forgot password */}
          {pageName === "forgotPassword" && <ForgotPasswordForm />}
          {/* Reset password */}
          {pageName === "resetPassword" && <ResetPasswordForm />}
        </StyledContentContainer>
      </StyledLeftSide>
      <StyledLoginImage src={ImageLogin} alt="Login image" />
    </StyledMainContainer>
  );
};

export default OnBoarding;
