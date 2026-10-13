import { NavLink } from "react-router-dom";
import { BsSoundwave } from "react-icons/bs";
import { MdAnalytics, MdHomeFilled, MdLibraryMusic, MdSearch, MdSettings, MdCloudUpload } from "react-icons/md";

const navigationItems = [
    { to: "/artist/dashboard", label: "Home", icon: MdHomeFilled, end: true },
    { to: "/artist/dashboard/search", label: "Search", icon: MdSearch },
    { to: "/artist/dashboard/library", label: "Library", icon: MdLibraryMusic },
    { to: "/artist/dashboard/upload", label: "Upload", icon: MdCloudUpload },
    { to: "/artist/dashboard/analytics", label: "Analytics", icon: MdAnalytics },
    { to: "/artist/dashboard/settings", label: "Settings", icon: MdSettings },
];

const ArtistSidebarLinks = ({ mobile = false }) => (
    <div className={mobile ? "sidebar-mobile-links" : "sidebar-links"}>
        {navigationItems.map(({ to, label, icon: Icon, end }) => (
            <NavLink key={to} to={to} end={end} className={({ isActive }) => `sidebar-link ${isActive ? "active" : ""}`} title={label}>
                <Icon size={mobile ? 23 : 22} />
                <span>{label}</span>
            </NavLink>
        ))}
    </div>
);

const ArtistSidebar = () => (
    <>
        <aside className="sidebar-desktop artist-sidebar">
            <div className="sidebar-brand">
                <span className="sidebar-brand-mark"><BsSoundwave size={25} /></span>
                <div><div className="sidebar-brand-name">EchoStream</div><div className="sidebar-brand-subtitle">Artist studio</div></div>
            </div>
            <div className="sidebar-section-label">Workspace</div>
            <ArtistSidebarLinks />
            <div className="artist-sidebar-profile"><span className="artist-avatar">AR</span><div><strong>Alex Rivers</strong><small>Artist account</small></div></div>
        </aside>
        <nav className="sidebar-mobile" aria-label="Artist mobile navigation"><ArtistSidebarLinks mobile /></nav>
    </>
);

export default ArtistSidebar;
