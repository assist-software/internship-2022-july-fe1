import React, { useState } from "react";
import { LoginForm } from "./LoginPageElements";
import { Link } from "react-router-dom";

import FormTitle from "../../components/FormTitle";
import FormLabel from "../../components/FormLabel";
import InputLabel from "../../components/InputLabel";
import { LoginFormInput } from "../../components/LoginFormInput";
import FormButton from "../../components/FormButton";

const ForgotPasswordForm = ({ currentPage }) => {
  const [email, setEmail] = useState("");
  console.log("here i am");
  return (
    <LoginForm>
      <FormTitle text="Forgot password" />
      <FormLabel text="Password reset link sent to your email address." />
      <InputLabel text="Email" />
      <LoginFormInput
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        id="email"
        placeholder="Email"
      />
      <FormButton text="Send reset link" />
      <div className="inline">
        <Link
          to="/login"
          style={{
            textDecoration: "none",
            color: "#0356E8",
            fontSize: "14px",
            marginLeft: "5px",
          }}
        >
          Back to Log in
        </Link>
      </div>
    </LoginForm>
  );
};

export default ForgotPasswordForm;
