import { Routes, Route } from "react-router-dom";
import "./App.css";

import LandingPage from "./Components/LandingPage";
import ListenerSignupPage from "./Components/listenerSignupPage";
import ArtistSignupPage from "./Components/artistSignupPage";
import SignUpMailConfirmationPage from "./Components/signUpMailConfirmationPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/listener/signup" element={<ListenerSignupPage />} />
      <Route path="/artist/signup" element={<ArtistSignupPage />} />
      <Route path="/signup/confirmation" element={<SignUpMailConfirmationPage />} />
    </Routes>
  );
}

export default App;