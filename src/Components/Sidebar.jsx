import React from 'react'
import { NavLink } from 'react-router-dom'
import { BsSoundwave } from "react-icons/bs";
import {
  MdHomeFilled,
  MdExplore,
  MdSearch,
  MdPlaylistPlay,
  MdFavorite,
  MdSettings,   
} from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
const Sidebar = () => {
  return (
    <>
      <div style={{height: '99.9vh', width: '13vw',}} className='d-flex flex-column align-items-center bg-white'>
         <div className="d-flex align-items-center gap-2 ">
            <BsSoundwave size={35} color="#00685F" />
        
            <div
              className="navbar-brand mb-0 fw-bold fs-3  fs-md-6"
              style={{ color: "#00685F" }}
            >
              EchoStream
            </div>
          </div>
            <div className='fw-medium d-flex text-start'>Premuim Audio</div>
        <div className="d-flex mx-5 flex-column mt-3 gap-3" style={{width: '100%'}}>

        <NavLink
  to="/listener/dashboard"className={({ isActive }) =>`sidebar-link ${isActive ? "active" : ""}`}><MdHomeFilled size={30} /> <span>Home</span>
</NavLink>
   
   <NavLink
  to="/listener/dashboard/discover"className={({ isActive }) =>`sidebar-link ${isActive ? "active" : ""}`}><MdExplore size={30} /> <span>Discover</span>
</NavLink>
<NavLink
  to="/listener/dashboard/search"className={({ isActive }) =>`sidebar-link ${isActive ? "active" : ""}`}><MdSearch size={30} /> <span>Search</span>
</NavLink>
<NavLink
  to="/listener/dashboard/playlist"className={({ isActive }) =>`sidebar-link ${isActive ? "active" : ""}`}><MdPlaylistPlay size={30} /> <span>Playlist</span>
</NavLink>
<NavLink
  to="/listener/dashboard/favourites"className={({ isActive }) =>`sidebar-link ${isActive ? "active" : ""}`}><MdFavorite size={25} /> <span>Liked Songs</span>
</NavLink>

<div className=''>
  <span className='fs-6 mx-3 text-secondary d-flex gap-3'>ACCOUNT</span>
  <NavLink
  to="/listener/dashboard/settings"className={({ isActive }) =>`sidebar-link ${isActive ? "active" : ""}`}><MdSettings size={25} /> <span>Settings</span>
</NavLink>
 <NavLink
  to="/listener/signin"className={({ isActive }) =>`sidebar-link ${isActive ? "active" : ""}`}><FiLogOut size={25} /> <span>Logout</span>
</NavLink>

</div>
  </div>



    </div>
    <div
  className="d-flex flex-column align-items-center bg-white"
  style={{
    height: "100vh",
    width: "13vw",
    borderLeft: "1px solid #C4CFCC",
  }}
></div>
    </>
  )
}

export default Sidebar