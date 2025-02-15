import React, { useState } from 'react';
import AuthForm from '../components/AuthForm';

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Name:", firstName + lastName, "Email:", email, "Password:", password);
    setFirstName("");
    setEmail("");
    setPassword("");
    setlastName("");
  };

  return (
    <AuthForm
      heading="Sign Up"
      inputs={[
        {
          type: "text",
          value: firstName,
          onChange: (e) => setFirstName(e.target.value),
        placeholder: "firstname",
        },
        {
          type: "text",
          value: lastName,
          onChange: (e) => setlastName(e.target.value),
        placeholder: "lastname",
        },
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
      onSubmit={submitHandler}
      buttonText="Sign Up"
      footerText="Already have an account? Sign In"
      footerLink="/"
    />
  );
};

export default Signup;
