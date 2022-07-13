import React,{useState} from 'react'
import {LoginForm, BreakLine,Anchor } from './LoginPageElements';
import FormTitle from '../../components/FormTitle';
import FormLabel from '../../components/FormLabel';

import InputLabel from '../../components/InputLabel';
import {LoginFormInput} from '../../components/LoginFormInput';
import PasswordInput from '../../components/PasswordInput';
import FormButton from '../../components/FormButton';
import GoogleButton from '../../components/GoogleButton';

import {Link} from 'react-router-dom';

const CreateAccountForm = ({currentPage}) => {
  
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [passwordVisibility, setPasswordVisibility] = useState(true);
  
    const toogleVisibility = () => {
      setPasswordVisibility(!passwordVisibility);
    };
  
  return (
    <LoginForm>
              <FormTitle text="Create account"/>
              <FormLabel text="Sign up for free and become a member."/>
              <GoogleButton text={"Sign up with Google"}
              />
              <BreakLine>
                <hr/>
                <p>OR</p>
              </BreakLine>
              <InputLabel text="Email"/ >
              <LoginFormInput
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
              placeholder="Email"/>
              <InputLabel text="Password"/ >
              <PasswordInput passwordVisibility={passwordVisibility} toogleVisibility={toogleVisibility} password={password} setPassword={setPassword}/>
              <h2>At least 8 characters and one number.</h2>
            <FormButton text="Sign up"/>
            <div className='inline'>
            <FormLabel text={'Already have an account?'}/>
            <Link to="/login" style={{textDecoration: 'none',color: '#0356E8',fontSize: '14px',marginLeft: '5px'}}>Log in</Link>
            </div>
        </LoginForm>
  )
}

export default CreateAccountForm