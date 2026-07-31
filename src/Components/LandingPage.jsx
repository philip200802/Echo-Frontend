import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import { BsSoundwave } from "react-icons/bs";
import { HiSparkles } from "react-icons/hi2";
import { MdRecordVoiceOver } from "react-icons/md";
import { MdPsychology } from "react-icons/md";
import { FaPlay } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa6";
import { CiCircleCheck } from "react-icons/ci";
import { LuBadgeCheck } from "react-icons/lu";
import { BsGlobeAmericasFill } from "react-icons/bs";
import { CiVideoOn } from "react-icons/ci";
import { CiShare2 } from "react-icons/ci";





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
  <button className='btn px-md-5 px-3 py-3  py-md-4 fw-bold text-white fs-6 rounded-4 buttonStart' style= {{backgroundColor: '#0F9B8D'}}>Start Listening Now</button>
  <button className='btn px-md-5 px-3 py-3  py-md-3 fw-bold text-white fs-6 rounded-4 buttonExplore' style={{backgroundColor: '#162120'}}>Explore (Artist)</button>
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
</div>  
<div className="container mt-5">
  <div className="row g-3">
    <div className="col-12 col-md-4 position-relative rounded-5 image1">
      <img
        src="/elizeu-dias-aZ3qiq1eTRk-unsplash.jpg"
        alt=""
        className="img-fluid w-100 rounded-5"
        style={{
          height: "500px",
          objectFit: "cover",
        }}
      />
      <span className=' fw-bolder fs-5 px-4 py-3 position-absolute' style= {{ bottom: "35px",
      left: "25px", zIndex: 2,color:'#0F9B8D' }}>Indie Electronic<br/> <span style={{}} className='fw-bold text-white fs-6'>Luna Ray</span></span>
<button className='position-absolute px-3 btn py-2 text-white fw-medium button2 align-items-center d-flex gap-1 rounded-3' style= {{ bottom: "5px",
      left: "30px", zIndex: 2,backgroundColor:'#0F9B8D' }}><FaPlay />Listen now</button>
  
    </div>

    <div className="col-12 col-md-4 rounded-5 position-relative image2">
      <img
        src="/claudia-raya-Ol0wJhWu3-s-unsplash.jpg"
        alt=""
        className="img-fluid w-100 rounded-5"
        style={{
          height: "500px",
          objectFit: "cover",
        }}
      />
        <span className=' fw-bolder fs-5 px-4 py-3 position-absolute' style= {{ bottom: "35px",
      left: "25px", zIndex: 2,color:'#0F9B8D' }}>Cyberpop<br/> <span style={{}} className='fw-bold text-white fs-6'>Synthia</span>
     </span>
      <button className='position-absolute px-3 btn py-2 text-white fw-medium button2 align-items-center d-flex gap-1 rounded-3' style= {{ bottom: "5px",
      left: "30px", zIndex: 2,backgroundColor:'#0F9B8D' }}><FaPlay />Listen now</button>
  

    </div>

    <div className="col-12 col-md-4 position-relative image3">
      <img
        src="/mohd-zuber-saifi-pFwPM1_YI2M-unsplash.jpg"
        alt=""
        className="img-fluid w-100 rounded-5"
        style={{
          height: "500px",
          objectFit: "cover",
        }}
      />
       <span className=' fw-bolder fs-5 px-4 py-3 position-absolute' style= {{ bottom: "35px",
      left: "25px", zIndex: 2,color:'#0F9B8D' }}>
Folk Revival<br/> <span style={{}} className='fw-bold text-white fs-6'>Arlo Gray</span></span>
<button className='position-absolute px-3 btn py-2 text-white fw-medium button2 align-items-center d-flex gap-1 rounded-3' style= {{ bottom: "5px",
      left: "30px", zIndex: 2,backgroundColor:'#0F9B8D' }}><FaPlay />Listen now</button>
  
    </div>
  </div>
</div>  

  <div  style={{ backgroundColor: "#E9F4F8" }}>
  <div className="container-fluid py-3 mt-5" style={{}}>
  <p className='d-flex justify-content-center  fw-bolder' style={{fontSize: '1.2rem'}}>Choose Your Rhythm</p>
  <span className='d-flex justify-content-center fw-medium'> Premium audio for every stage of your listening journey.</span>
  </div>
  


<div className="container py-5">
  <div className="row g-4 justify-content-center">
    <div className="col-12 col-md-4">
      <div className="rounded-5 p-5 h-100" style={{backgroundColor:'#F9FCFB'}}>
          <p className='mt-2 fw-bold fs-5'style={{fontSize: '1.1rem'}} >Echo Free<br/>
    <span className='mb-4  fw-medium' style={{color: '#949796', fontSize: '1rem'}}>The essentials.</span>
</p>
      <p className='fs-5  fw-bold'>₦0<span className='fw-medium' style={{color: '#949796'}}>/mo</span></p>
      <p className='mt-4 d-flex gap-3 align-items-center fw-medium'><FaCheck size={'17'} color={'#74c4bd'}/> Standard Quality
check</p>
<p className='d-flex gap-3 align-items-center mb-5 fw-medium'> <FaCheck size={'17'} color={'#74c4bd'}/>   Smart Playlists</p>


<button className='w-100 py-3 rounded-4 fw-medium btn mt-5' style={{border:'2px solid #bcc9bc'}}>Get started </button>

  
       </div>
    </div>
<div className="col-12 col-md-4 position-relative">
      <div className="rounded-5 p-5 h-100 bg-black" style={{backgroundColor:'#F9FCFB'}}>
          <p className='mt-2 fw-bold text-white' style={{fontSize: '1.1rem'}}>Echo Pro<br/>
    <span className='mb-4 fw-medium' style={{color: '#949796', fontSize: '1rem'}}>For the music obsessed.</span>
</p>
      <p className='fw-meduim fs-5 text-white fw-bold'>₦500<span className='fw-medium' style={{color: '#949796'}}>/mo</span></p>
      <p className='mt-4 d-flex gap-3 align-items-center fw-medium text-white'> <CiCircleCheck size={'28'} color={'#74c4bd'}/> Ad-Free Listening</p>
<p className='d-flex gap-3 align-items-center  fw-medium text-white'> <CiCircleCheck size={'28'} color={'#74c4bd'}/>  Lossless Hi-Fi Audio</p>
<p className='d-flex gap-3 align-items-center mb-5 fw-medium text-white'> <CiCircleCheck size={'28'} color={'#74c4bd'}/>  Offline Everywhere</p>


<button className='w-100 py-3 rounded-4 fw-bold btn  text-white' style={{ backgroundColor: '#0F9B8D'}}>Upgrade to pro</button>

<div className='position-absolute rounded-5 text-white fw-bold d-flex justify-content-center mx-3 px-4 py-1' style={{backgroundColor: "#0F9B8D",  right: '120px', bottom: '440px'}}>MOST POPULAR</div>

  
       </div>
    </div>

    <div className="col-12 col-md-4">
         <div className="rounded-5 p-5 h-100" style={{backgroundColor:'#F9FCFB'}}>
          <p className='mt-2 fw-bold fs-5'style={{fontSize: '1.1rem'}} >Echo Studio<br/>
    <span className='mb-4  fw-medium' style={{color: '#949796', fontSize: '1rem'}}>The ultimate experience..</span>
</p>
      <p className='fs-5  fw-bold'>₦2000<span className='fw-medium' style={{color: '#949796'}}>/mo</span></p>
      <p className='mt-4 d-flex gap-3 align-items-center fw-medium'><LuBadgeCheck size={'27'} color={'#74c4bd'}/>24-bit/192kHz Quality
</p>
<p className='d-flex gap-3 align-items-center  fw-medium'> <LuBadgeCheck size={'27'} color={'#74c4bd'}/>  Exclusive Studio Master</p>
<p className='d-flex gap-3 align-items-center mb-5 fw-medium'> <LuBadgeCheck size={'27'} color={'#74c4bd'}/> Creator Toolkit Access</p>


<button className='w-100 py-3 rounded-4 fw-medium btn' style={{border:'2px solid #bcc9bc'}}>Start trial</button>

  
       </div>
    </div>

  </div>
</div>

<div className="container py-5 bg-black mt-5 rounded-5 d-flex justify-content-center flex-column text-center" style={{backgroundColor: '#E9F4F8'}}>
<p className='fw-bold text-white fs-6 text-center'>Ready to change how <br/> 
you listen?
</p> 
<p className='mt-3'style={{color: '#949796'}}>Join the millions of listeners and creators defining the next era of high-fidelity sound.</p>
<div className='d-flex justify-content-center gap-3 mt-4 flex-column flex-md-row mb-5'>
  <button className='btn text-white  py-4 px-5 fw-medium rounded-4 fs-5 text-center' style={{ backgroundColor: '#0F9B8D'}}>Join Echostrem</button>
  <button className='btn text-white fw-medium  rounded-4 py-4 px-5' style={{border:'1px solid #bcc9bc'}}>Learn More</button>
</div>
</div>

  <hr
  className="my-5"
  style={{
    borderColor: "#bcc9bc",
    opacity: 0.9,
  }}
/>



  

  <div className="container">
  <div className="row text-center text-md-start gy-4">
    <div className="col-12 col-md-3">
       <div className="d-flex align-items-center gap-2 ">
    <BsSoundwave size={25} color="#00685F" />

    <div
      className="navbar-brand mb-0 fw-bold fs-5  fs-md-6"
      style={{ color: "#00685F" }}
    >
      EchoStream
    </div>
  </div>
    <p className='mt-3 fw-medium fs-6'>The future of sonic exploration. Dedicated to high-fidelity sound and supporting the global creative community since 2024.</p>
    <div className="d-flex gap-4">
  <div
    className="d-flex justify-content-center align-items-center rounded-circle"
    style={{
      width: "45px",
      height: "45px",
      backgroundColor: "white",
    }}
  >
    <BsGlobeAmericasFill size={20} color="black" />
  </div>

  <div
    className="d-flex justify-content-center align-items-center rounded-circle"
    style={{
      width: "45px",
      height: "45px",
      backgroundColor: "white",
    }}
  >
    <CiVideoOn size={20} color="black" />
  </div>

  
  <div
    className="d-flex justify-content-center align-items-center rounded-circle"
    style={{
      width: "45px",
      height: "45px",
      backgroundColor: "white",
    }}
  >
  <CiShare2 size={20} color="black"/>
  </div>

</div>    </div>

    <div className="col-12 col-md-3">
      <h5 style={{color: '#0F9B8D'}} className='fw-bold mb-3'>COMPANY</h5>
      <p className='fw-medium'>About Us</p>
      <p className='fw-medium'>Careers</p>
      <p className='fw-medium'>Band Assets</p>
      <p className='fw-medium'>Contact</p>
    </div>

    <div className="col-12 col-md-3">
      <h5 style={{color: '#0F9B8D'}} className='fw-bold mb-3'>PRODUCT</h5>
      <p className='fw-medium'>Features</p>
      <p className='fw-medium'>For Artists</p>
      <p className='fw-medium'>For Listeners</p>
      <p className='fw-medium'>Pricing</p>
    </div>

    <div className="col-12 col-md-3">
      <h5 style={{color: '#0F9B8D'}} className='fw-bold mb-3'>Support</h5>
      <p className='fw-medium'>Help Center</p>
      <p className='fw-medium'>Community</p>
      <p className='fw-medium'>Privacy Policy</p>
      <p className='fw-medium'>Terms of Service</p>
    </div>
  </div>

      <hr
  className="my-5"
  style={{
    borderColor: "#bcc9bc",
    opacity: 0.9,
  }}
/>
<div className='d-flex justify-content-between align-items-center fw-medium flex-column flex-md-row'><p>© {new Date().getFullYear()} EchoStream Inc. All rights reserved.</p> <span className='fw-medium d-flex gap-2 align-items-center'><BsGlobeAmericasFill/>English(US)</span></div>
</div>

</div>



</>
  )
}


export default LandingPage