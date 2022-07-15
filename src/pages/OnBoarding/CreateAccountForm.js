import React, { useState } from 'react';
import {
  StyledLoginForm,
  StyledBreakLine,
  StyledAnchor,
} from './LoginPageElements';
import StyledFormTitle from '../../components/FormTitle/FormTitle';
import StyledFormLabel from '../../components/FormLabel/FormLabel';
import StyledInputLabel from '../../components/InputLabel/InputLabel';
import { StyledLoginFormInput } from '../../components/LoginFormInput';
import StyledPasswordInput from '../../components/PasswordInput/PasswordInput';
import StyledFormButton from '../../components/FormButton/FormButton';
import StyledGoogleButton from '../../components/GoogleButton/GoogleButton';

const CreateAccountForm = () => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const toogleVisibility = () => {
    setPasswordVisibility(!passwordVisibility);
  };

  return (
    <StyledLoginForm>
      <StyledFormTitle text='Create account' />
      <StyledFormLabel text='Sign up for free and become a member.' />
      <StyledGoogleButton text={'Sign up with Google'} />
      <StyledBreakLine>
        <hr />
        <p>OR</p>
      </StyledBreakLine>
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
      <p>At least 8 characters and one number.</p>
      <StyledFormButton text='Sign up' />
      <div className='inline'>
        <StyledFormLabel text={'Already have an account?'} />
        <StyledAnchor to='/login'>Log in</StyledAnchor>
      </div>
    </StyledLoginForm>
  );
};

export default CreateAccountForm;
