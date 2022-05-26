import { faAngleDoubleDown, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../Hooks/useAdmin';
import Loader from '../Shared/Loader/Loader';

const Dashboard = () => {
    const [user, loading] = useAuthState(auth)
    const [admin] = useAdmin(user)
    if (loading) {
        return <Loader></Loader>
    }
    return (
        <div className="drawer drawer-mobile ">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content ">
                {/* <!-- Page content here --> */}
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden my-2"> <FontAwesomeIcon icon={faAngleDoubleDown} className="text-3xl "></FontAwesomeIcon></label>

                <div className='flex flex-col '>
                    <h1 className='text-4xl text-blue-700 my-5'>Dashboard</h1>
                    <Outlet></Outlet>
                </div>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay "></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content ">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to="myorders">My Orders</Link></li>
                    <li><Link to="addreview">Add A Review</Link></li>
                    <li><Link to="myprofile">My Profile</Link></li>
                    
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;