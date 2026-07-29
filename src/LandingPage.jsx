import React from 'react'
import Navbar from './Navbar'
import { BsSoundwave } from "react-icons/bs";
const LandingPage = () => {
  return (
    <>
          
        <nav className="navbar navbar-expand-lg bg-body-tertiary d-flex justify-content-between align-items-center px-4">
  <div className="d-flex align-items-center gap-2">
    <div className="brand-mark">
      <BsSoundwave size={50} color="#00685F" />
    </div>

    <div
      className="navbar-brand fs-3 fw-bold mb-0"
      style={{ color: "#00685F" }}
    >
      EchoStream
    </div>
  </div>


  <div className="d-flex align-items-center gap-2">
    <button className="btn btn-light text-dark fs-6 btn-sm fw-medium rounded-pill px-4 ">
      Sign In
    </button>

    <button
      className="btn btn-success btn-sm rounded-pill px-4"
      style={{ backgroundColor: "#00685F" }}
    >
      Get Started
    </button>
  </div>
</nav>
        <div className="container-fluid d-flex justify-content-center align-items-center" style={{height: "90vh"}}></div>
    </>
  )
}

export default LandingPage