import React, { useState } from "react";
import { StyledAnchor, StyledLoginForm } from "./LoginPageElements";
import StyledFormTitle from "../../components/FormTitle/FormTitle";
import StyledFormLabel from "../../components/FormLabel/FormLabel";
import StyledInputLabel from "../../components/InputLabel/InputLabel";
import { StyledLoginFormInput } from "../../components/LoginFormInput";
import StyledFormButton from "../../components/FormButton/FormButton";

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState("");
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
      <StyledFormButton text="Send reset link" />
      <div className="inline">
        <StyledAnchor to="/login">Back to Log in</StyledAnchor>
      </div>
    </StyledLoginForm>
  );
};

export default ForgotPasswordForm;
