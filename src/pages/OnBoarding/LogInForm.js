import React, { useState } from "react";
import { LoginForm} from "./LoginPageElements";
import FormTitle from "../../components/FormTitle";
import FormLabel from "../../components/FormLabel";
import InputLabel from "../../components/InputLabel";
import { LoginFormInput } from "../../components/LoginFormInput";
import PasswordInput from "../../components/PasswordInput";
import FormButton from "../../components/FormButton";
import GoogleButton from "../../components/GoogleButton";
import { Link } from "react-router-dom";

const LogInForm = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [passwordVisibility, setPasswordVisibility] = useState(true);

  const toogleVisibility = () => {
    setPasswordVisibility(!passwordVisibility);
  };

  return (
    <LoginForm>
      <FormTitle text="Log in" />
       
        <FormLabel text="Enter your account details below." />
      <InputLabel text="Email" />
      <LoginFormInput

        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        id="email"
        placeholder="Email"
      />
      <InputLabel text="Password" />
      <PasswordInput
        passwordVisibility={passwordVisibility}
        toogleVisibility={toogleVisibility}
        password={password}
        setPassword={setPassword}
      />
      <div className="checkbox">
        <div>
          <input type={"checkbox"} />
          <span>Remember me</span>
        </div>
        <Link
          to="/forgot-password"
          style={{
            textDecoration: "none",
            color: "#0356E8",
            fontSize: "14px",
            marginLeft: "5px",
          }}
        >
          Forgot your password?
        </Link>
      </div>
      <FormButton text="Log in" />
      <GoogleButton text={"Log in with Google"} />
      <div className="inline">
        <FormLabel text={`Don't have an account?`} />
        <Link
          to="/sign-up"
          style={{
            textDecoration: "none",
            color: "#0356E8",
            fontSize: "14px",
            marginLeft: "5px",
          }}
        >
          Sign up
        </Link>
      </div>
    </LoginForm>
  );
};

export default LogInForm;
