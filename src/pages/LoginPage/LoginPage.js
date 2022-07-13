import React,{useState} from 'react'
import { LeftSide, MainContainer, LoginImage, ContentContainer, LoginForm, BreakLine } from './LoginPageElements';
import ImageLogin from "../../assets/images/furniture.png";
import AssistLogo from '../../components/AssistLogo';
import FormTitle from '../../components/FormTitle';
import FormLabel from '../../components/FormLabel';
import {GoogleLogin} from 'react-google-login'
import InputLabel from '../../components/InputLabel';
import {LoginFormInput} from '../../components/LoginFormInput';
import PasswordInput from '../../components/PasswordInput';
import FormButton from '../../components/FormButton';


const clientId = 'YOUR_CLIENT_ID.apps.googleeusearchcontent.com';

const LoginPage = () => {
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
    <MainContainer>
        <LeftSide>
          <ContentContainer>
            <AssistLogo />
            <LoginForm>
              <FormTitle text="Create account"/>
              <FormLabel text="Sign up for free and become a member."/>
              <GoogleLogin
                clientId={clientId}
                buttonText="Sign up with Google"
                onSuccess={onSuccess}
                onFailure={onFailure}
                className={"Google"}
                cookiePolicy={'single_host_origin'}
                style={{textAlign: 'center'}}
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
            <h4>Already have an account?</h4><a href=''>Log In</a>
            </div>
            </LoginForm>
          </ContentContainer>
        </LeftSide>
        <LoginImage src={ImageLogin} alt="Login image"/>
    </MainContainer>
  )
}

export default LoginPage
