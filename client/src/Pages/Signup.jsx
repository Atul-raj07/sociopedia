import React from 'react';
import AuthForm from '../components/AuthForm';
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setLogin } from '../store/reducers/UserReducer';
const Signup = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleSignup = async (values) => {
    try {
      const res = await axios.post('http://localhost:5000/auth/register', values);
      console.log(res);
       
      if(res.data === 'email already exist' ){
        navigate("/auth/login")
      }
      dispatch(setLogin({
        user: res.data.user,
        token: res.data.token
    }));
    
    // Redirect to feeds page
    navigate('/posts/getfeeds');
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
      footerLink="/auth/login"
    />
  );
};

export default Signup;
