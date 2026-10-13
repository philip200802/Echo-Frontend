import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Sidebar";
import Topbar from "../Components/Topbar";

const ListenerLayout = () => {
  return (
    <div className="d-flex">
      <Sidebar />

      <main
        className="listener-main flex-grow-1"
      >
        <Topbar />
        <div className='p-4'>
          <Outlet />

        </div>
      </main>
    </div>
  );
};

export default ListenerLayout;  