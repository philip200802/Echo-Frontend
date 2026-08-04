
import { Outlet } from 'react-router-dom';
import Sidebar from '../Components/Sidebar';

const listenerLayout = () => {
    return(
<div className='d-flex'>
    <Sidebar />
    <h1>Am a boy</h1>
<Outlet />
</div>
)

    
}

export default listenerLayout

