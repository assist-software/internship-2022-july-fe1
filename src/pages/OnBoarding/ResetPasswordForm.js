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

  const [verifiedPassword, setVerifiedPassword] = useState("");
  const [verifiedPasswordVisibility, setVerifiedPasswordVisibility] =
    useState(true);

  const toogleVisibility = () => {
    setPasswordVisibility(!passwordVisibility);
  };

  const toogleVisibility2 = () => {
    setVerifiedPasswordVisibility(!verifiedPasswordVisibility);
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
      <p>At least 8 characters and one number.</p>
      <StyledInputLabel text="Confirm password" />
      <StyledPasswordInput
        passwordVisibility={verifiedPasswordVisibility}
        toogleVisibility={toogleVisibility2}
        password={verifiedPassword}
        setPassword={setVerifiedPassword}
      />
      <StyledFormButton text="Confirm password" />
    </StyledLoginForm>
  );
};

export default ResetPasswordForm;
