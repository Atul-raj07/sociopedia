import React, { useState } from 'react';
import AuthForm from '../components/AuthForm';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);
    setEmail("");
    setPassword("");
  };

  return (
    <AuthForm
      heading="Login"
      inputs={[
        {
          type: "email",
          value: email,
          onChange: (e) => setEmail(e.target.value),
          placeholder: "email",
        },
        {
          type: "password",
          value: password,
          onChange: (e) => setPassword(e.target.value),
          placeholder: "password",
        },
      ]}
      
      forgotText="paasword bhul gye guru"
      forgotpassword="/forgotpassword"
      onSubmit={submitHandler}
      buttonText="Login"
      footerText="Don't have an account yet? Sign up"
      footerLink="/signup"
    />
  );
};

export default Login;
