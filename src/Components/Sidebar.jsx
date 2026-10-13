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

const navigationItems = [
  { to: "/listener/dashboard", label: "Home", icon: MdHomeFilled, end: true },
  { to: "/listener/dashboard/discover", label: "Discover", icon: MdExplore },
  { to: "/listener/dashboard/search", label: "Search", icon: MdSearch },
  { to: "/listener/dashboard/playlist", label: "Playlist", icon: MdPlaylistPlay },
  { to: "/listener/dashboard/favourites", label: "Liked Songs", icon: MdFavorite },
  { to: "/listener/dashboard/settings", label: "Settings", icon: MdSettings },
];

const SidebarLinks = ({ mobile = false }) => (
  <div className={mobile ? "sidebar-mobile-links" : "sidebar-links"}>
    {navigationItems.map(({ to, label, icon: Icon, end }) => (
      <NavLink
        key={to}
        to={to}
        end={end}
        className={({ isActive }) => `sidebar-link ${isActive ? "active" : ""}`}
        title={label}
      >
        <Icon size={mobile ? 23 : 22} />
        <span>{label}</span>
      </NavLink>
    ))}
  </div>
);

const Sidebar = () => {
  return (
    <>
      <aside className="sidebar-desktop">
        <div className="sidebar-brand">
          <span className="sidebar-brand-mark"><BsSoundwave size={25} /></span>
          <div>
            <div className="sidebar-brand-name">EchoStream</div>
            <div className="sidebar-brand-subtitle">Premium Audio</div>
          </div>
        </div>
        <div className="sidebar-section-label">Explore</div>
        <SidebarLinks />
        <div className="sidebar-now-playing">
          <span className="sidebar-now-playing-dot" />
          <div><strong>Good listening</strong><small>Your sound, your space.</small></div>
        </div>
      </aside>
      <nav className="sidebar-mobile" aria-label="Mobile navigation">
        <SidebarLinks mobile />
      </nav>
    </>
  )
}

export default Sidebar