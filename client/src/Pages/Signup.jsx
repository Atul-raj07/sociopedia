import React from 'react';
import AuthForm from '../components/AuthForm';
import axios from "axios"
const Signup = () => {
  const handleSignup = async (values) => {
    try {
      const res = await axios.post('http://localhost:5000/auth/register', values);
      console.log('Response:', res.data);
    } catch (error) {
      console.error('Signup error:', error);
    }
    
  };

  return (
    <AuthForm  
      heading="Sign Up"
      inputs={[
        { type: "text", name: "firstName", placeholder: "Firstname" },
        { type: "text", name: "lastName", placeholder: "Lastname" },
        { type: "email", name: "email", placeholder: "Email" },
        { type: "password", name: "password", placeholder: "Password" },
        { type: "file", name: "picturepath", placeholder: "picturepath" },
      ]}
      isLogin={false}
      onSubmit={handleSignup}
      buttonText="Sign Up"
      footerText="Already have an account? Sign In"
      footerLink="/"
    />
  );
};

export default Signup;
