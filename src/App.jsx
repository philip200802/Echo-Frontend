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
import ListenerLayout from "./layouts/listenerLayout";
import Dashboard from './pages/Listener/Dashboard'
import { Discover, Search, Playlist, LikedSongs, Settings, Logout } from './pages/Listener/ListenerPages'
import ArtistLayout from './layouts/artistLayout'
import ArtistDashboard from './pages/Artist/ArtistDashboard'
import { ArtistSearch, ArtistLibrary, ArtistUpload, ArtistAnalytics, ArtistSettings } from './pages/Artist/ArtistPages'
import AdminLayout from './layouts/adminLayout'
import { AdminDashboard, AdminUsers, AdminLibrary, AdminAnalytics, AdminSettings } from './pages/Admin/AdminPages'
import { EmailVerifiedPage, ForgotPasswordPage, ForgotPasswordStatusPage, PrivacyPage, ResetPasswordPage, TermsPage } from "./pages/PublicPages";


function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/listener/signup" element={<ListenerSignupPage />} />
      <Route path="/artist/signup" element={<ArtistSignupPage />} />
      <Route path="/signup/confirmation" element={<SignUpMailConfirmationPage />} />
      <Route path="/listener/signin" element={<ListenerSigninPage />} />
      <Route path="/artist/signin" element={<ArtistSigninPage />} />
      <Route path="/admin/signin" element={<AdminSigninPage />} />
      <Route path="/forgot/password" element={<ForgotPasswordMail />} />
      <Route path="/forgot/confirmation" element={<ForgotMailConfirmation />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      <Route path="/forgot-password/status" element={<ForgotPasswordStatusPage />} />
      <Route path="/reset-password/:token" element={<ResetPasswordPage />} />
      <Route path="/email-verified" element={<EmailVerifiedPage />} />
      <Route path="/terms" element={<TermsPage />} />
      <Route path="/privacy-policy" element={<PrivacyPage />} />
      <Route path="/listener/dashboard" element={<ListenerLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="discover" element={<Discover />} />
        <Route path="search" element={<Search />} />
        <Route path="playlist" element={<Playlist />} />
        <Route path="favourites" element={<LikedSongs />} />
        <Route path="settings" element={<Settings />} />
      </Route>
      <Route path="/listener/logout" element={<ListenerLayout />}>
        <Route index element={<Logout />} />
      </Route>
      <Route path="/artist/dashboard" element={<ArtistLayout />}>
        <Route index element={<ArtistDashboard />} />
        <Route path="search" element={<ArtistSearch />} />
        <Route path="library" element={<ArtistLibrary />} />
        <Route path="upload" element={<ArtistUpload />} />
        <Route path="analytics" element={<ArtistAnalytics />} />
        <Route path="settings" element={<ArtistSettings />} />
      </Route>
      <Route path="/admin/dashboard" element={<AdminLayout />}>
        <Route index element={<AdminDashboard />} />
        <Route path="users" element={<AdminUsers />} />
        <Route path="library" element={<AdminLibrary />} />
        <Route path="analytics" element={<AdminAnalytics />} />
        <Route path="settings" element={<AdminSettings />} />
      </Route>

      {/* <Route path="*" element= {<ListenerSigninPage/>} /> */}



    </Routes>

  );
}

export default App;