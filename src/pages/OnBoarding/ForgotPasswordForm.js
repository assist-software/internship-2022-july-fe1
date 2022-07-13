import React,{useState} from 'react'
import { LoginForm, Anchor } from './LoginPageElements';

import FormTitle from '../../components/FormTitle';
import FormLabel from '../../components/FormLabel';
import InputLabel from '../../components/InputLabel';
import {LoginFormInput} from '../../components/LoginFormInput';
import FormButton from '../../components/FormButton';

const ForgotPasswordForm = ({currentPage}) => {
    const [email, setEmail] = useState("");
  return (
    <LoginForm>
    <FormTitle text="Forgot password"/>
    <FormLabel text="Password reset link sent to your email address."/>
    <InputLabel text="Email"/ >
    <LoginFormInput
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    type="email"
    id="email"
    placeholder="Email"/>              
  <FormButton text="Send reset link"/>         
  <div className='inline'>
  <Anchor href='' onClick={currentPage}>Back to Log in</Anchor>
  </div>
  </LoginForm>
  )
}

export default ForgotPasswordForm