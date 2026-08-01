import React, { useState } from "react";
import { BsSoundwave } from "react-icons/bs";
import { MdHeadset } from "react-icons/md";
import { MdMicExternalOn } from "react-icons/md";
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { FaEye, FaEyeSlash } from "react-icons/fa";
import {useNavigate} from "react-router-dom";


const SignupSchema = Yup.object({
  fullName: Yup.string()
    .min(3, "Name must be at least 3 characters")
    .required("Full name is required"),

  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),

  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),

  passwordConfirmation: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Password confirmation is required"),

    agree: Yup.boolean()
    .oneOf([true], "You must accept the terms and conditions")
    .required("You must accept the terms and conditions"),
  });
  
  
  
  const signupPage = () => {
  const navigate = useNavigate();
  
    const [showPassword, setShowPassword] = useState(false);
    const[showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [loading, setLoading] = useState(false);
  const formik = useFormik({
  initialValues: {
    fullName: "",
    email: "",
    password: "",
    passwordConfirmation: "",
    agree: false,
  },
  validationSchema: SignupSchema,
  onSubmit: async (values) => {
  try {
    setLoading(true);

    console.log(values);
    await new Promise((resolve) => setTimeout(resolve, 3000));

  } catch (error) {
    console.log(error);
  } finally {
    setLoading(false);
  }
},
});
    

  return (
    <>
      <div className="d-flex align-items-center gap-2 mt-3">
        <BsSoundwave size={35} color="#00685F" />

        <div
          className="navbar-brand mb-0 fw-bold fs-3  fs-md-6"
          style={{ color: "#00685F" }}
        >
          EchoStream
        </div>
      </div>
      <div
        className="container-fluid d-flex justify-content-center align-items-center"
        style={{
          backgroundColor: "#E9F4F8",
          minHeight: "93vh",
        }}
      >
        <div
          className="bg-white rounded-5 shadow p-4 mt-5 mt-md-1"
          style={{
            width: "100%",
            maxWidth: "450px",
            minHeight: "500px",
          }}
        >
          <h1 className='text-center'>Join the Stream </h1>
          <p className='text-center '>Experience music like never before.</p>
          <p className='fw-medium text-secondary' style={{ fontSize: '0.8rem' }}>I WANT TO...</p>
          <div className='d-flex  gap-3 mt-3'>
            <button
              className="btn w-50 d-flex flex-column align-items-center p-3"
                                         style={{
                border: "1px solid #D9E0DE",
              }} onClick={() => navigate('/listener/signup')} 
            type="button"> 
              <MdHeadset size={33} color="#00685F"/>

              <p className="fw-medium mb-0 ">
                Listen
              </p>

              <p
                className="text-black mb-0"
                style={{
                  fontSize: "0.7rem",
                  lineHeight: "1.2",
                }}
              >
                Discover and enjoy music
              </p>
            </button>
            <button className="btn w-50 d-flex flex-column align-items-center p-3"
 style={{
                backgroundColor: "#E6F5F3",
                border: "1px solid #00685F",
              }}
onClick={() => navigate('/artist/signup')} type="button">
              <MdMicExternalOn size={33} color="#006857"  />

              <p className="fw-medium mb-0 ">
                Share
              </p>

              <p
                className="text-black mb-0"
                style={{
                  fontSize: "0.7rem",
                  lineHeight: "1.2",
                }}
              >
                Upload and grow your fanbase.
              </p>

            </button>
          </div>
          <form className='mt-4 d-flex flex-column gap-3' onSubmit={formik.handleSubmit}>
            <span className='fs-6 fw-medium'>Full Name</span>

            <input
  type="text"
  name="fullName"
  className="form-control rounded-4  py-2"
  placeholder="Enter your full name"
  onChange={formik.handleChange}
  onBlur={formik.handleBlur}
  value={formik.values.fullName}
/>

{formik.touched.fullName && formik.errors.fullName && (
  <div className="text-danger">
    {formik.errors.fullName}
  </div>
)}
            
                  <div className='d-flex '>
            <span className='fs-6 fw-medium'>Email Address </span>
            </div>
      
  <div className="w-100">
    <input
      type="email"
      name="email"
      className="form-control rounded-4"
      placeholder="Enter your email"
      value={formik.values.email}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
    />

    {formik.touched.email && formik.errors.email && (
      <div className="text-danger mt-1">
        {formik.errors.email}
      </div>
    )}
  </div>

    <span className='fs-6 fw-medium'>Password </span>
  <div className="w-100 position-relative">
  <input
    type={showPassword ? "text" : "password"}
    name="password"
    className="form-control rounded-4 pe-5"
    placeholder="Enter your password"
    value={formik.values.password}
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
  />


    <button
    type="button"
    className="btn position-absolute top-50 end-0 translate-middle-y border-0 bg-transparent"
    onClick={() => setShowPassword(!showPassword)}
    >
    {showPassword ? <FaEyeSlash /> : <FaEye />}
  </button>
    
  </div>
        {formik.touched.password && formik.errors.password && (
          <div className="text-danger mt-1">
            {formik.errors.password}
          </div>
        )}
    <span className='fs-6 fw-medium'>Confirm Password </span> 
  <div className="w-100 position-relative">
    <input
      type= {showConfirmPassword ? "text" : "password"}
      name="passwordConfirmation"
      className="form-control rounded-4"
      placeholder="Confirm your password"
      value={formik.values.passwordConfirmation   }
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
    />

    <button type= 'button' className="btn position-absolute top-50 end-0 translate-middle-y border-0 bg-transparent" onClick={()=> setShowConfirmPassword(!showConfirmPassword)}>
         {showConfirmPassword ? <FaEyeSlash />:<FaEye/> }
        </button>
  </div>
    {formik.touched.passwordConfirmation && formik.errors.passwordConfirmation && (
      <div className="text-danger mt-1">
        {formik.errors.passwordConfirmation}
      </div>
      
    )}

<div className='d-flex  align-items-center mt-3 mx-2 gap-2'>

<input type='checkbox' name="agree" checked = {formik.values.agree} onChange={formik.handleChange} onBlur= {formik.handleBlur}></input> 
<span className="fs-6 fw-light">I agree to the     <span className="fw-medium" style={{ color: "#0F9B8D" }}>Terms of Service</span> and    <span className="fw-medium" style={{ color: "#0F9B8D" }}>Privacy Policy </span> </span>

</div>
{formik.touched.agree && formik.errors.agree && (
  <div className="text-danger mt-1">
    {formik.errors.agree}
  </div>
)}
    <div className='d-flex justify-content-center flex-column align-items-center'>
      
      <button
  type="submit"
  className="btn mt-3 px-2 w-75 text-white rounded-5 py-2 fw-medium"
  style={{ backgroundColor: "#0F9B8D" }}
  disabled={loading}
>
  {loading ? (
    <>
      <span
        className="spinner-border spinner-border-sm me-2"
        role="status"
        aria-hidden="true"
      ></span>
      Creating Account...
    </>
  ) : (
    "Create an Artist Account"
  )}
</button><span> Already have an account? <span className='fw-medium' style={{color: '#0F9B8D'}}>Sign In</span></span>
     </div>
</form>    
   </div>
      </div>

    </>
  )
}
export default signupPage