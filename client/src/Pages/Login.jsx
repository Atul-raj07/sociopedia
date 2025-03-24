import React from 'react';
import AuthForm from '../components/AuthForm';
import {useDispatch} from "react-redux"
import {setLogin} from "../store/reducers/UserReducer"
import { Form } from 'formik';
import axios from "axios"
import { redirect, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleLogin = async (values) => {
    
      try {
        const res = await axios.post('http://localhost:5000/auth/login', values);
        console.log('Response:', res.data);
        if (res.status === 200) {
          navigate("/home")
         
        }
      } catch (error) {
        console.error('Login error:', error);
      }
   
  };

  return (
    <AuthForm
      heading="Login"
      inputs={[
        { type: "email", name: "email", placeholder: "Email" },
        { type: "password", name: "password", placeholder: "Password" },
      ]}
      isLogin={true}
      forgotpassword="/forgotpassword"
      forgotText="Forgot Password"
      onSubmit={handleLogin}
      buttonText="Login"
      footerText="Don't have an account yet? Sign Up"
      footerLink="/signup"
    />
  );
};

export default Login;
