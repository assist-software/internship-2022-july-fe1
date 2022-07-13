import React,{useState} from 'react'
import {LoginForm,Anchor } from './LoginPageElements';
import FormTitle from '../../components/FormTitle';
import FormLabel from '../../components/FormLabel';
import {GoogleLogin} from 'react-google-login'
import InputLabel from '../../components/InputLabel';
import {LoginFormInput} from '../../components/LoginFormInput';
import PasswordInput from '../../components/PasswordInput';
import FormButton from '../../components/FormButton';

const clientId = 'YOUR_CLIENT_ID.apps.googleeusearchcontent.com';

const LogInForm = ({currentPage}) => {
    const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [passwordVisibility, setPasswordVisibility] = useState(true);

  const toogleVisibility = () => {
    setPasswordVisibility(!passwordVisibility);
  };

  const onSuccess = (res) => {
    console.log('[Login Succes] currentUser:', res.profileObj);
  }
  const onFailure = (res) => {
    console.log('[Login Failed] res',res);
  }
  return (
    <LoginForm>
              <FormTitle text="Log in"/>
              <FormLabel text="Enter your account details below."/>
              <InputLabel text="Email"/ >
              <LoginFormInput
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
              placeholder="Email"/>
              <InputLabel text="Password"/ >
              <PasswordInput passwordVisibility={passwordVisibility} toogleVisibility={toogleVisibility} password={password} setPassword={setPassword}/>
              <div className='checkbox'>
                {/* <input type={"checkbox"}>Remember me</input> */}
                <Anchor href=''>Forgot your password?</Anchor>
              </div>
            <FormButton text="Log in"/>
            <GoogleLogin
                clientId={clientId}
                buttonText="Sign up with Google"
                onSuccess={onSuccess}
                onFailure={onFailure}
                className={"Google"}
                cookiePolicy={'single_host_origin'}
                style={{textAlign: 'center'}}
              />
            <div className='inline'>
            <FormLabel text={`Don't have an account?`}/><Anchor href='' onClick={currentPage}>Sign up</Anchor>
            </div>
            </LoginForm>
  )
}

export default LogInForm