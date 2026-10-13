import { Outlet } from "react-router-dom";
import ArtistSidebar from "../Components/ArtistSidebar";
import Topbar from "../Components/Topbar";

const ArtistLayout = () => (
    <div className="d-flex">
        <ArtistSidebar />
        <main className="artist-main flex-grow-1">
            <Topbar />
            <Outlet />
        </main>
    </div>
);

export default ArtistLayout;
