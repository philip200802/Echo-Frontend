import { NavLink } from "react-router-dom";
import { BsSoundwave } from "react-icons/bs";
import { MdAnalytics, MdHomeFilled, MdLibraryMusic, MdPeople, MdSettings } from "react-icons/md";

const items = [
  { to: "/admin/dashboard", label: "Home", icon: MdHomeFilled, end: true },
  { to: "/admin/dashboard/users", label: "Users", icon: MdPeople },
  { to: "/admin/dashboard/library", label: "Library", icon: MdLibraryMusic },
  { to: "/admin/dashboard/analytics", label: "Analytics", icon: MdAnalytics },
  { to: "/admin/dashboard/settings", label: "Settings", icon: MdSettings },
];

const AdminSidebar = () => {
  return <>
    <aside className="sidebar-desktop admin-sidebar">
      <div className="sidebar-brand"><span className="sidebar-brand-mark"><BsSoundwave size={25} /></span><div><div className="sidebar-brand-name">EchoStream</div><div className="sidebar-brand-subtitle">Admin console</div></div></div>
      <div className="sidebar-section-label">Management</div>
      <div className="sidebar-links">{items.map(({ to, label, icon: Icon, end }) => <NavLink key={to} to={to} end={end} className={({ isActive }) => `sidebar-link ${isActive ? "active" : ""}`}><Icon size={22} /><span>{label}</span></NavLink>)}</div>
      <div className="admin-sidebar-status"><span /> <div></div></div>
    </aside>
    <nav className="sidebar-mobile" aria-label="Admin mobile navigation"><div className="sidebar-mobile-links">{items.map(({ to, label, icon: Icon, end }) => <NavLink key={to} to={to} end={end} className={({ isActive }) => `sidebar-link ${isActive ? "active" : ""}`}><Icon size={23} /><span>{label}</span></NavLink>)}</div></nav>
  </>
};

export default AdminSidebar;
