import { Routes, Route } from "react-router-dom";
import "./App.css";

import LandingPage from "./Components/LandingPage";
import SignupPage from "./Components/signupPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signup" element={<SignupPage />} />
    </Routes>
  );
}

export default App;