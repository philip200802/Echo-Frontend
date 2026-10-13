import { BsSoundwave } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup'


const ForgotPasswordMail = () => {
  const navigate = useNavigate();
  const forgotSchema = Yup.object({
    email: Yup.string()
      .email('Invalid Email Address')
      .required('Email is required')
  })
  const formik = useFormik({
    initialValues:{

    email: ''
  }, validationSchema:forgotSchema,
  onSubmit:(values) =>{
console.log(values);

    navigate("/forgot/confirmation", {
      state: {
        email: values.email,
      },
    });

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
      className="container-fluid justify-content-center d-flex flex-column align-items-center"
      style={{
        backgroundColor: "#E9F4F8",
        minHeight: "93vh",
      }}
    >
      <div className='d-flex  flex-column align-items-center'>
        <div style={{ width: '85px', height: '80px', backgroundColor: '#E3F0EF' }} className='rounded-circle d-flex justify-content-center align-items-center mt-3'>                <BsSoundwave size={45} color="#00685F" />
        </div>

        <h1 className="mt-3 fw-bold text-center">
          Forgot your Password
        </h1>

        <p className="text-center text-secondary mt-3 fw-medium">
          Enter the email address associated with <br /> your account and we'll send you a link to<br /> reset your password
          <br />
          <span className="fw-semibold text-dark">
          </span>
        </p>
      </div>
      <div className="bg-white rounded-5 shadow p-4 mt-5 mt-md-1 d-flex flex-column"
        style={{
          width: "100%",
          maxWidth: "450px",
          minHeight: "200px",
        }}>
        <form onSubmit={formik.handleSubmit}>

          <span className='fw-medium fs-6 '>Email Address</span>
          <input type="email" className='form-control rounded-4 py-2 mt-2' placeholder='name@example.com' type="email" name='email' value={formik.values.email}  onChange={formik.handleChange} onBlur={formik.handleBlur} />

          {formik.touched.email && formik.errors.email && (
            <div className="text-danger">
              {formik.errors.email}
            </div>
          )}
        <button
          className="btn w-100 rounded-pill py-3 mt-4 text-white fw-semibold"
          style={{ backgroundColor: "#00685F" }}
          type='submit'>
          Send Reset Link        </button>
        </form>

        <div className="text-center mt-4">

          <button
            className="btn p-0 fw-semibold"
            style={{ color: "#00685F" }} onClick={() =>navigate('/listener/signin')}
          >
            Back to Sign In
          </button>
        </div>
      </div>
    </div>
  </>
)
}

export default ForgotPasswordMail