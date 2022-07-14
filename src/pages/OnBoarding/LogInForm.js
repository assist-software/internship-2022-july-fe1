import React, { useState } from "react";
import { StyledLoginForm, StyledAnchor } from "./LoginPageElements";
import StyledFormTitle from "../../components/FormTitle/FormTitle";
import StyledFormLabel from "../../components/FormLabel/FormLabel";
import StyledInputLabel from "../../components/InputLabel/InputLabel";
import { StyledLoginFormInput } from "../../components/LoginFormInput";
import StyledPasswordInput from "../../components/PasswordInput/PasswordInput";
import StyledFormButton from "../../components/FormButton/FormButton";
import StyledGoogleButton from "../../components/GoogleButton/GoogleButton";

const LogInForm = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [passwordVisibility, setPasswordVisibility] = useState(true);

  const toogleVisibility = () => {
    setPasswordVisibility(!passwordVisibility);
  };

  return (
    <StyledLoginForm>
      <StyledFormTitle text="Log in" />
      <StyledFormLabel text="Enter your account details below." />
      <StyledInputLabel text="Email" />
      <StyledLoginFormInput
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        id="email"
        placeholder="Email"
      />
      <StyledInputLabel text="Password" />
      <StyledPasswordInput
        passwordVisibility={passwordVisibility}
        toogleVisibility={toogleVisibility}
        password={password}
        setPassword={setPassword}
      />
      <div className="checkbox">
        <div>
          <input type={"checkbox"} />
          <span>Remember me</span>
        </div>
        <StyledAnchor to="/forgot-password">Forgot your password?</StyledAnchor>
      </div>
      <StyledFormButton text="Log in" />
      <StyledGoogleButton text={"Log in with Google"} />
      <div className="inline">
        <StyledFormLabel text={`Don't have an account?`} />
        <StyledAnchor to="/sign-up">Sign up</StyledAnchor>
      </div>
    </StyledLoginForm>
  );
};

export default LogInForm;
