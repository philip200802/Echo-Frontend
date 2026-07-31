import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import { BsSoundwave } from "react-icons/bs";
import { HiSparkles } from "react-icons/hi2";
import { MdRecordVoiceOver } from "react-icons/md";
import { MdPsychology } from "react-icons/md";



const LandingPage = () => {
  return (
    <>
          
       <nav
  className="navbar px-2 px-md-4 d-flex justify-content-between align-items-center flex-nowrap position-sticky top-0 "
  style={{ backgroundColor: "#F5F5F5",     zIndex: 1000, }}
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
  style={{ height: "92.5vh" }}
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
  <div className='btn rounded-pill fw-bold text-white  px-md-5     align-items-center' style={{backgroundColor: '#162120', fontSize: "clamp(0.9rem, 1vw, 1.1rem)"}}><HiSparkles size={30} color="#00685F" />INTRODUCING STUDIO GRADE LOSSLESS
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
  <button className='btn px-md-5 px-3 py-3  py-md-4 fw-bold text-white fs-6 rounded-4' style= {{backgroundColor: '#0F9B8D'}}>Start Listening Now</button>
  <button className='btn px-md-5 px-3 py-3  py-md-3 fw-bold text-white fs-6 rounded-4' style={{backgroundColor: '#162120'}}>Explore (Artist)</button>
</div>
</div>
<div className='w-100'  style={{backgroundColor: '#E9F4F8'}}>
   <div
  className="container py-5 w-100 "
>
  <div className="row align-items-center">

    <div className="col-12 col-md-5 mb-3 mb-md-0">
     <h4 className='fw-bold fs-6'>Closer than ever to the <span style={{color: '#0F9B8D'}}> Source.</span></h4>
        <p className='mt-md-3 mt-5' style={{fontSize: 'clamp(1rem, 2vh, 3rem)'}}>We don't just stream files; we curate experiences. Our platform connects you with the energy of the live performance through high-fidelity spatial audio.</p>
        <div>
         <button
  className="btn w-100 p-4 rounded-4 d-flex align-items-center text-start border-0 shadow-sm"
  style={{ backgroundColor: "#F9FCFB" }}
>

  <div
    className="d-flex justify-content-center align-items-center rounded-4 me-4"
    style={{
      width: "70px",
      height: "70px",
      backgroundColor: "#D7EEEB",
      flexShrink: 0,
    }}
  >
    <MdRecordVoiceOver size={34} color="#0F9B8D" />
  </div>

  <div>
    <h5 className="fw-bold mb-1" style={{ color: "#162120" }}>
      24-bit Master Quality
    </h5>

    <p className="mb-0 text-secondary">
      Hear the space between the notes.
    </p>
  </div>
</button>
          <button
  className="btn w-100 mt-2 mt-md-3 p-4 rounded-4 d-flex align-items-center text-start border-0 shadow-sm"
  style={{ backgroundColor: "#F9FCFB" }}
>

  <div
    className="d-flex justify-content-center align-items-center rounded-4 me-4"
    style={{
      width: "70px",
      height: "70px",
      backgroundColor: "#D7EEEB",
      flexShrink: 0,
    }}
  >
    <MdPsychology size={34} color="#0F9B8D"/>
  </div>

  <div>
    <h5 className="fw-bold mb-1" style={{ color: "#162120" }}>
      Taste Intelligence

    </h5>

    <p className="mb-0 text-secondary">
      Discovery that actually understands your mood.
    </p>
  </div>
</button> 

        </div>
      </div>

   <div className="col-12 col-md-7 position-relative">
  <img
    src="/chris-irk6DwN9giQ-unsplash.jpg"
    className="img-fluid rounded-5"
    alt=""
    style={{
      width: "100%",
      height: "100vh",
      objectFit: "cover",
    }}
  />
  <span className='btn btn-dark text-white fw-bolder fs-6 px-4 py-3 position-absolute' style= {{ bottom: "20px",
      left: "25px", zIndex: 2, }}>Featured Artist<br/> <span style={{color:'#0F9B8D'}} className='fw-bold'>Elias Soul</span></span>
</div>
  </div>
</div>
</div>



<div className="container py-5">
  <p className="fw-bold fs-4 mb-3">Rising in the Echo</p>

  <div className="d-flex flex-column">
    <p
      className="mb-3"
      style={{
        maxWidth: "500px",
        fontSize: "1.1rem",
        color: "#495057",
      }}
    >
      The future of sound is being written by these pioneers.
      Explore curated highlights from across the globe.
    </p>

    <div className="d-flex justify-content-end">
      <button
        className="btn p-0 border-0 bg-transparent fw-bold d-flex align-items-center gap-2"
        style={{ color: "#0F9B8D" }}
      >
        View Trending Charts
        <FaArrowRight />
      </button>
    </div>
  </div>

  <div className='d-md-f;ex '>
    <div> </div>
    <div></div>
    <div></div>
  </div>
</div>    </>
  )
}


export default LandingPage