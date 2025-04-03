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
        const res = await axios.post('http://localhost:5000/auth/login', values ,{
          withCredentials:true
        });
        
        // Redux store mein user data save karo
        dispatch(setLogin({
            user: res.data.user,
            token: res.data.token
        }));
        
        // Redirect to feeds page
        navigate('/posts/getfeeds');
        
    } catch (error) {
        console.error('Login error:', error);
        // Error message dikhao user ko
        alert(error.response?.data?.message || 'Login failed');
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
      footerLink="/auth/register"
    />
  );
};

export default Login;
