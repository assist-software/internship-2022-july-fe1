import React, { useState } from "react";
import { StyledLoginForm } from "./LoginPageElements";
import StyledFormTitle from "../../components/FormTitle/FormTitle";
import StyledFormLabel from "../../components/FormLabel/FormLabel";
import StyledInputLabel from "../../components/InputLabel/InputLabel";
import StyledPasswordInput from "../../components/PasswordInput/PasswordInput";
import StyledFormButton from "../../components/FormButton/FormButton";

const ResetPasswordForm = () => {
  const [password, setPassword] = useState("");
  const [passwordVisibility, setPasswordVisibility] = useState(true);

  const toogleVisibility = () => {
    setPasswordVisibility(!passwordVisibility);
  };

  return (
    <StyledLoginForm>
      <StyledFormTitle text="Reset password" />
      <StyledFormLabel text="Create a new password for your account." />
      <StyledInputLabel text="Password" />
      <StyledPasswordInput
        passwordVisibility={passwordVisibility}
        toogleVisibility={toogleVisibility}
        password={password}
        setPassword={setPassword}
      />
      <h2>At least 8 characters and one number.</h2>
      <StyledInputLabel text="Confirm password" />
      <StyledPasswordInput
        passwordVisibility={passwordVisibility}
        toogleVisibility={toogleVisibility}
        password={password}
        setPassword={setPassword}
      />
      <StyledFormButton text="Confirm password" />
    </StyledLoginForm>
  );
};

export default ResetPasswordForm;
