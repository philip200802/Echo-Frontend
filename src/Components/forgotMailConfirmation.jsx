import React from 'react'
import { BsSoundwave } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const forgotMailConfirmation = () => {
    const navigate = useNavigate();
    const { state } = useLocation();
    const email = state?.email||'Your email address'
  return (
    <>
        <div className='d-none d-md-block'>
        <div className="d-flex align-items-center gap-2 mt-3">
          
                <BsSoundwave size={35} color="#00685F" />
        
                <div
                  className="navbar-brand mb-0 fw-bold fs-3  fs-md-6"
                  style={{ color: "#00685F" }}
                  >
                  EchoStream
                </div>
              </div>
              </div>
              <div
                className="container-fluid d-flex justify-content-center align-items-center"
                style={{
                  backgroundColor: "#E9F4F8",
                  minHeight: "93vh",
                }}
                >
              
                <div  className="bg-white rounded-5 shadow p-4 mt-5 mt-md-1 d-flex flex-column align-items-center"
          style={{
            width: "100%",
            maxWidth: "450px",
            minHeight: "500px",}}> 
            <div style={{width:'85px' , height: '80px',backgroundColor: '#E3F0EF'}} className='rounded-circle d-flex justify-content-center align-items-center mt-3'><CiMail size={59} color="#00685F"/></div>

<h1 className="mt-3 fw-bold text-center">
  Check your email
</h1>

<p className="text-center text-secondary mt-3">
  We've sent a password reset link to
  <br />
  <span className="fw-semibold text-dark">
   {email}
  </span>
</p>

<p className="text-center text-secondary">
  Please check your inbox and follow the instructions to reset your password
  
</p>
<div
  className="p-3 rounded-4 mt-4"
  style={{
    background: "#F5FCFB",
    border: "1px solid #D7F1ED",
  }}
>
  <small className="text-secondary">
    The verification link expires in <b>15 minutes.</b>
    If you don't see the email, check your Spam or Promotions folder.
  </small>
</div>
<button
  className="btn w-100 rounded-pill py-3 mt-4 text-white fw-semibold"
  style={{ backgroundColor: "#00685F" }}
onClick={() => navigate('/listener/signup')}>
  Back to Sign Up
</button>

<div className="text-center mt-4">
  <p className="text-secondary mb-1">
    Didn't receive the email?
  </p>

  <button
    className="btn p-0 fw-semibold"
    style={{ color: "#00685F" }}
  >
    Resend Link
  </button>
</div>
            </div>
        </div>
    </>
  )
}

export default forgotMailConfirmation