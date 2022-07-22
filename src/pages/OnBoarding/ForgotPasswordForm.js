import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { StyledAnchor, StyledLoginForm } from "./LoginPageElements";
import StyledFormTitle from "../../components/FormTitle/FormTitle";
import StyledFormLabel from "../../components/FormLabel/FormLabel";
import StyledInputLabel from "../../components/InputLabel/InputLabel";
import { StyledLoginFormInput } from "../../components/LoginFormInput";
import StyledFormButton from "../../components/FormButton/FormButton";

import { useGlobalAuthContext } from "../../Context/authContext";

const ForgotPasswordForm = () => {
  const navigate = useNavigate()
  const { resetPassword } = useGlobalAuthContext()
  const [email, setEmail] = useState("");

  const handleClick = (e) => {
    e.preventDefault()
    resetPassword(email)
    // navigate('/login')
  }

  return (
    <StyledLoginForm>
      <StyledFormTitle text="Forgot password" />
      <StyledFormLabel text="Password reset link sent to your email address." />
      <StyledInputLabel text="Email" />
      <StyledLoginFormInput
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        id="email"
        placeholder="Email"
      />
      <StyledFormButton text="Send reset link" func={(e) => handleClick(e)} />
      <div className="inline">
        <StyledAnchor to="/login">Back to Log in</StyledAnchor>
      </div>
    </StyledLoginForm>
  );
};

export default ForgotPasswordForm;
