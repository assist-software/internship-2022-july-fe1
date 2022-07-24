import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { StyledLoginForm, StyledAnchor } from "./LoginPageElements";
import StyledFormTitle from "../../components/FormTitle/FormTitle";
import StyledFormLabel from "../../components/FormLabel/FormLabel";
import StyledInputLabel from "../../components/InputLabel/InputLabel";
import { StyledLoginFormInput } from "../../components/LoginFormInput";
import StyledPasswordInput from "../../components/PasswordInput/PasswordInput";
import StyledFormButton from "../../components/FormButton/FormButton";
import StyledGoogleButton from "../../components/GoogleButton/GoogleButton";

import { useGlobalAuthContext } from "../../Context/authContext";

const LogInForm = () => {
  const navigate = useNavigate();
  const { register } = useGlobalAuthContext();
  const [wrongPassword, setWrongPassword] = useState(false);

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [passwordVisibility, setPasswordVisibility] = useState(true);

  const toogleVisibility = () => {
    setPasswordVisibility(!passwordVisibility);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(email, password);
    register(email, password, "login");
    localStorage.setItem("email", email);
    setTimeout(() => {
      if (localStorage.getItem("email")) {
        setWrongPassword(false);
        navigate("/");
      } else {
        setWrongPassword(true);
      }
    }, 1600);
  };

  return (
    <StyledLoginForm>
      <StyledFormTitle text='Log in' />
      {wrongPassword ? (
        <StyledFormLabel
          text='You have entered an invalid username or password'
          valid={wrongPassword}
        />
      ) : (
        <StyledFormLabel text='Enter your account details below.' />
      )}
      <StyledInputLabel text='Email' />
      <StyledLoginFormInput
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type='email'
        id='email'
        placeholder='Email'
      />
      <StyledInputLabel text='Password' />
      <StyledPasswordInput
        passwordVisibility={passwordVisibility}
        toogleVisibility={toogleVisibility}
        password={password}
        setPassword={setPassword}
      />
      <div className='checkbox'>
        <div>
          <input type={"checkbox"} />
          <span>Remember me</span>
        </div>
        <StyledAnchor to='/forgot-password'>Forgot your password?</StyledAnchor>
      </div>
      <StyledFormButton text='Log in' func={(e) => handleLogin(e)} />
      <StyledGoogleButton text={"Log in with Google"} />
      <div className='inline'>
        <StyledFormLabel text={`Don't have an account?`} />
        <StyledAnchor to='/sign-up'>Sign up</StyledAnchor>
      </div>
    </StyledLoginForm>
  );
};

export default LogInForm;
