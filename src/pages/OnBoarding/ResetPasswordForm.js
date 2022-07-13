import React,{useState} from 'react'
import {LoginForm } from './LoginPageElements';
import FormTitle from '../../components/FormTitle';
import FormLabel from '../../components/FormLabel';
import InputLabel from '../../components/InputLabel';
import PasswordInput from '../../components/PasswordInput';
import FormButton from '../../components/FormButton';

const ResetPasswordForm = () => {
    const [password, setPassword] = useState("");
  const [passwordVisibility, setPasswordVisibility] = useState(true);

  const toogleVisibility = () => {
    setPasswordVisibility(!passwordVisibility);
  };

  return (
    <LoginForm>
              <FormTitle text="Reset password"/>
              <FormLabel text="Create a new password for your account."/>
              <InputLabel text="Password"/ >
              <PasswordInput passwordVisibility={passwordVisibility} toogleVisibility={toogleVisibility} password={password} setPassword={setPassword}/>
              <h2>At least 8 characters and one number.</h2>
              <InputLabel text="Confirm password"/ >
              <PasswordInput passwordVisibility={passwordVisibility} toogleVisibility={toogleVisibility} password={password} setPassword={setPassword}/>            
            <FormButton text="Confirm password"/>         
            </LoginForm>
  )
}

export default ResetPasswordForm