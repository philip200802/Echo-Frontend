import React from 'react'
import { BsSoundwave } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import * as Yup from 'yup'
import {useFormik} from 'formik'

const SigninSchema =Yup.object({
    email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),

     password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .required("Password is required"),

} )
const listenerSigninPage = () => {
    const navigate = useNavigate()
    
    const formik = useFormik({
    initialValues:{
 email: "",
    password: "",
    role: 'artist'
    },
     validationSchema:SigninSchema,
onSubmit:(values)=>{
        console.log(values);
},

});

    return (
        <>
                <div className='d-none d-lg-block'>
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

                <div className="bg-white rounded-5 shadow p-4 mt-5 mt-md-1 "
          style ={{
            width: "100%",
            maxWidth: "450px",
            minHeight: "500px",}}>
                    <div className='mt-2 d-flex flex-column justify-content-center align-items-center'>
                <BsSoundwave size={55} color="#00685F" />
                    </div>
                     <div
                    className=" mb-0 fw-bold   fs-2 d-flex flex-column justify-content-center align-items-center"
                    style={{ color: "#00685F" }}
                >
                    EchoStream
                </div>
                <p className='fs-6 fw-medium d-flex flex-column justify-content-center align-items-center'>Precision audio, curated for you.</p>

                <div className='py-2 mx-4  d-flex rounded-4 gap-2 align-items-center justify-content-center' style={{backgroundColor: '#E7ECE9'}}>
                    <button className='btn mx-md-2 mx-0 px-3 px-lg-5 fw-medium' onClick={() => navigate('/listener/signin')}>Listener</button>
                    <button className='btn bg-white mx-2 px-lg-5 px-3 fw-medium'onClick={() => navigate('/artist/signin')}>Artist</button>
                </div>
                <form className='d-flex flex-column mt-3'onSubmit={formik.handleSubmit}>
                    <span className='mx-4 fw-medium'>Email Address</span>
                    <div className='mx-4 mt-1' >
                    <input type="email" name='email'  className=' form-control fw-medium' placeholder='@name@example.com' onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur}/>
                       {formik.touched.email && formik.errors.email && (
      <div className="text-danger mt-1">
        {formik.errors.email}
      </div>
    )}

                    </div>

                    <span className='mx-4 fw-medium mt-3 d-flex justify-content-between'>Password <span className='fw-normal' style= {{color: '#00685F', fontSize: '0.8rem'}} onClick={()=> navigate('/forgot/password') }>Forgot password?</span></span>
                    <div className='mx-4 mt-1' >
                    <input type="password" name='password'  className=' form-control fw-medium' placeholder='Enter your password ' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password}/>
                        {formik.touched.password && formik.errors.password && (
      <div className="text-danger mt-1">
        {formik.errors.password}
      </div>
    )}

                    </div>
                    <div className='mt-4 d-flex justify-content-center'>
                    <button className='btn text-white fs-medium w-50 d-flex justify-content-center' type ='submit' style={{backgroundColor: "#00685F"}}>Sign in</button>
                    </div>
                    <p className='d-flex mt-2 justify-content-center align-items-center gap-2'>Don't have an account? <span className='fw-medium ' style={{color:'#00685F'}} onClick={() => navigate('/artist/signup')}> Sign up</span></p>
                </form>
            </div>

            </div>
        </>
    )
}

export default listenerSigninPage