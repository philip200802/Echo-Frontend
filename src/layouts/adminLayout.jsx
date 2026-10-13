import { Outlet } from "react-router-dom";
import AdminSidebar from "../Components/AdminSidebar";
import Topbar from "../Components/Topbar";
import "../styles/admin.css";

const AdminLayout = () => (
    <div className="admin-shell">
        <AdminSidebar />
        <main className="admin-main">
            <Topbar />
            <Outlet />
        </main>
    </div>
);

export default AdminLayout;
