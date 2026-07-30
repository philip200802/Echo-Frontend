import React from 'react'
import { BsSoundwave } from "react-icons/bs";
import { HiSparkles } from "react-icons/hi2";


const LandingPage = () => {
  return (
    <>
          
       <nav
  className="navbar px-2 px-md-4 d-flex justify-content-between align-items-center flex-nowrap"
  style={{ backgroundColor: "#F5F5F5" }}
>
  <div className="d-flex align-items-center gap-2">
    <BsSoundwave size={35} color="#00685F" />

    <div
      className="navbar-brand mb-0 fw-bold fs-3  fs-md-6"
      style={{ color: "#00685F" }}
    >
      EchoStream
    </div>
  </div>

  <div className="d-flex align-items-center gap-1 gap-md-2 flex-shrink-0">
    <button
      className="btn btn-light rounded-pill fw-bold px-2 px-md-4 py-1 py-md-2"
      style={{ color: "#00685F", fontSize: "clamp(1rem, 2vw, 1.2  rem)" }}
    >
      Sign In
    </button>

    <button
      className="btn rounded-pill fw-bold px-2 px-md-4 py-1 py-md-2"
      style={{
        backgroundColor: "#00685F",
        color: "#fff",
        fontSize: "clamp(0.9rem, 2vw, 1.2rem)",
      }}
    >
      Get Started
    </button>
  </div>
</nav>
     <div
  className="container-fluid p-0"
  style={{ height: "90vh" }}
>
  <img
    src="/paige-cody-eAF5_2E6V0U-unsplash.jpg"
    alt="Hero"
    className="w-100 h-100"
    style={{ objectFit: "cover",backgroundColor: "#00685F" ,  }}
  />
</div>
<div className='position-absolute top-0 start-0 w-100 h-100' style={{backgroundColor: "rgba(0, 104, 95, 0.5)"}}></div>

<div className='mx-4 position-absolute mx-md-5 px-md-5'  style={{ top: "25%", left: "5%" }}>
  <div className='btn rounded-pill fw-bold text-white  px-md-5    align-items-center' style={{backgroundColor: '#162120', fontSize: "clamp(0.9rem, 1vw, 1.1rem)"}}><HiSparkles size={30} color="#00685F" />INTRODUCING STUDIO GRADE LOSSLESS
</div> 
<div>

  <h1 className='mt-3 mt-md-3 text-white fw-bolder' style={{fontSize: ' clamp(3rem, 8vw, 6rem)', fontFamily: "'Arial Black', sans-serif", fontWeight: 900,lineHeight: "0.95",
    letterSpacing: "-2px",}}>Sound that<br /> <span style = {{color:'#0F9B8E',fontSize: ' clamp(3rem, 7vw, 6rem)', fontStyle: 'italic' }} className='fw-bold' > breathes.</span> </h1>
</div>
<div className='mt-md-5'>
  <p className="text-white d-none d-md-block" style={{ fontSize: '1.4rem' }}>
  Experience the raw emotion of pure, uncompressed audio.
  <br  />
  EchoStream delivers every detail exactly as the artist intended.
</p>
<p className="text-white d-md-none"  style={{ fontSize: '1.1rem' }}>
  Experience the raw emotion of pure, uncompressed audio. EchoStream delivers every detail exactly as the artist intended.
</p>
</div>
<div className='mt-3 mt-md-4 d-flex gap-4 gap-md-4 flex-column flex-md-row'>
  <button className='btn px-md-5 px-3 py-3  py-md-4 fw-medium text-white fs-6 rounded-4' style= {{backgroundColor: '#0F9B8D'}}>Start Listening Now</button>
  <button className='btn px-md-5 px-3 py-3  py-md-3 fw-medium text-white fs-6 rounded-4' style={{backgroundColor: '#162120'}}>Explore (Artist)</button>
</div>
</div>
    </>
  )
}


export default LandingPage