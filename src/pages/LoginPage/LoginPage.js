import React,{useState} from 'react'
import { LeftSide, MainContainer, LoginImage, ContentContainer, LoginForm, BreakLine } from './LoginPageElements';
import ImageLogin from "../../assets/images/furniture.png";
import AssistLogo from '../../components/AssistLogo';
import FormTitle from '../../components/FormTitle';
import FormLabel from '../../components/FormLabel';
<<<<<<< HEAD
=======
// import {GoogleLogin} from 'react-google-login'
>>>>>>> 657ae588624f7247c54260c0724c5ddf0690bfa8
import InputLabel from '../../components/InputLabel';
import {LoginFormInput} from '../../components/LoginFormInput';
import PasswordInput from '../../components/PasswordInput';
import FormButton from '../../components/FormButton';

<<<<<<< HEAD
=======

// const clientId = 'YOUR_CLIENT_ID.apps.googleeusearchcontent.com';

>>>>>>> 657ae588624f7247c54260c0724c5ddf0690bfa8
const LoginPage = () => {
<<<<<<< HEAD
  // const onSuccess = (res) => {
  //   alert('[Login Succes] currentUser:', res.profileObj);
  // }
  // const onFailure = (res) => {
  //   alert('[Login Failed] res',res);
  // }
=======
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [passwordVisibility, setPasswordVisibility] = useState(true);

  const toogleVisibility = () => {
    setPasswordVisibility(!passwordVisibility);
  };
<<<<<<< HEAD
=======

  const onSuccess = (res) => {
    console.log('[Login Succes] currentUser:', res.profileObj);
  }
  const onFailure = (res) => {
    console.log('[Login Failed] res',res);
  }
>>>>>>> bacb1d29e1f92d89f2086fbb9aa3870d9e14a6c0

>>>>>>> 657ae588624f7247c54260c0724c5ddf0690bfa8
  return (
    <MainContainer>
        <LeftSide>
          <ContentContainer>
            <AssistLogo />
            <LoginForm>
              <FormTitle text="Create account"/>
              <FormLabel text="Sign up for free and become a member."/>
<<<<<<< HEAD
=======
              {/* <GoogleLogin
                clientId={clientId}
                buttonText="Sign up with Google"
                onSuccess={onSuccess}
                onFailure={onFailure}
                className={"Google"}
                cookiePolicy={'single_host_origin'}
                style={{textAlign: 'center'}}
              /> */}
>>>>>>> 657ae588624f7247c54260c0724c5ddf0690bfa8
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
