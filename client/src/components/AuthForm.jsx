import React from 'react';
import { Link } from 'react-router-dom';

const AuthForm = ({ heading, inputs, onSubmit,forgotpassword,forgotText, buttonText, footerText, footerLink }) => {
  return (
    <div className='h-[100vh] w-full flex items-center justify-center bg-slate-50 px-10 py-10'>
      <div className='w-[25%] rounded-xl flex flex-col items-center justify-center px-6 py-6 bg-slate-100'>
        <img
          src="/assets/letter-c-and-dove-png_265386-removebg-preview.png"
          className='h-40 mt-[-10px] w-40'
          alt="img"
        />
        <h1 className='text-xl font-semibold tracking-wide text-sky-600'>{heading}</h1>
        <form onSubmit={onSubmit} className='w-full flex flex-col mt-5 items-center justify-center'>
          {inputs.map((input, index) => (
            <input
              key={index}
              type={input.type}
              value={input.value}
              onChange={input.onChange}
              placeholder={input.placeholder}
              className='mb-6 px-6 py-2 text-base font-normal w-full rounded-lg placeholder:text-sky-500 placeholder:text-base placeholder:font-normal tracking-wider focus:outline-none'
            />
          ))}
         <Link to={forgotpassword}>{forgotText}</Link>
          <input
            className='w-full bg-blue-500 py-2 rounded-md text-white font-bold text-xl tracking-widest'
            type="submit"
            value={buttonText}
          />
        </form>
        <Link to={footerLink}>{footerText}</Link>

      </div>
    </div>
  );
};

export default AuthForm;
