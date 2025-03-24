import React from 'react';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';

// Yup schemas for validation
const registerSchema = yup.object().shape({
  firstName: yup.string().required("Required"),
  lastName: yup.string().required("Required"),
  email: yup.string().email("Invalid email").required("Required"),
  password: yup.string().required("Required"),
});

const loginSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Required"),
  password: yup.string().required("Required"),
});

// Initial values for each form
const initialValueRegister = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  picturepath:""
};

const initialValueLogin = {
  email: "",
  password: "",
};

const AuthForm = ({
  heading,
  inputs,
  isLogin,
  forgotpassword,
  forgotText,
  buttonText,
  footerText,
  footerLink,
  onSubmit,
}) => {
  // Choose initial values and schema based on form type
  const initialValues = isLogin ? initialValueLogin : initialValueRegister;
  const validationSchema = isLogin ? loginSchema : registerSchema;

  return (
    <div className="h-screen w-full flex items-center justify-center bg-slate-50 p-10">
      <div className="w-full cursor-pointer max-w-md rounded-xl flex flex-col items-center bg-slate-100 p-6">
        <img
          src="/assets/letter-c-and-dove-png_265386-removebg-preview.png"
          alt="Logo"
          className="h-40 w-40 -mt-5"
        />
        <h1 className="text-xl font-semibold tracking-wide text-sky-600">
          {heading}
        </h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={async (values, { resetForm }) => {
            await onSubmit(values);  // Wait for submission to complete
            resetForm()
          }}
        >
          {() => (
            <Form className="w-full mt-5 flex flex-col items-center cursor-pointer">
              {inputs.map((input, index) => (
                <div key={index} className="w-full mb-6">
                  <Field
                    name={input.name}
                    type={input.type}
                    placeholder={input.placeholder}
                    className="w-full px-6 py-2 rounded-lg text-base placeholder:text-sky-500 focus:outline-none"
                  />
                 
                  <ErrorMessage
                    name={input.name}
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
              ))}
              {forgotpassword && (
                  <Link 
                  to={forgotpassword}
                  className="font-light tracking-widest text-sm lowercase"
                >
                  {forgotText}
                </Link>
              )}
              <button
                type="submit"
                className="w-full bg-blue-500 my-4 py-2 rounded-md text-white font-bold text-xl tracking-widest"
              >
                {buttonText}
              </button>
            </Form>
          )}
        </Formik>
        <Link to={footerLink}>{footerText}</Link>
      </div>
    </div>
  );
};

export default AuthForm;
