import { Routes, Route } from "react-router-dom";
import "./App.css";

import LandingPage from "./Components/LandingPage";
import ListenerSignupPage from "./Components/listenerSignupPage";
import ArtistSignupPage from "./Components/artistSignupPage";
import SignUpMailConfirmationPage from "./Components/signUpMailConfirmationPage";
import ListenerSigninPage from "./Components/listenerSigninPage";
import ArtistSigninPage from "./Components/artistSigninPage";
import AdminSigninPage from "./Components/adminSigninPage";
import ForgotPasswordMail from "./Components/forgotPasswordMail";
import ForgotMailConfirmation from "./Components/forgotMailConfirmation";
import ListenerDashboard from "./Components/listenerDashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/listener/signup" element={<ListenerSignupPage />} />
      <Route path="/artist/signup" element={<ArtistSignupPage />} />
      <Route path="/signup/confirmation" element={<SignUpMailConfirmationPage />} />
      <Route path="/listener/signin" element= {<ListenerSigninPage/>} />
      <Route path="/artist/signin" element={<ArtistSigninPage />} />
      <Route path="/admin/signin" element={<AdminSigninPage />} />\
      <Route path="/forgot/password" element={<ForgotPasswordMail />} />
      <Route path="/forgot/confirmation" element={<ForgotMailConfirmation />} />      
      <Route path="/listener/dashboard" element={<ListenerDashboard />} />


    </Routes>

  );
}

export default App;