import { Routes, Route } from "react-router-dom";
import "./App.css";

import LandingPage from "./Components/LandingPage";
import ListenerSignupPage from "./Components/listenerSignupPage";
import ArtistSignupPage from "./Components/artistSignupPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/listener/signup" element={<ListenerSignupPage />} />
      <Route path="/artist/signup" element={<ArtistSignupPage />} />
    </Routes>
  );
}

export default App;