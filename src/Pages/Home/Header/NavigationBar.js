import { faBars, faCaretDown, faHamburger, faSignOut, faUser, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';
import swal from 'sweetalert';
import Loader from '../../Shared/Loader/Loader';

const NavigationBar = () => {
    const [user, loading,error] = useAuthState(auth)
    const navigate = useNavigate()
    if (loading) {
        return <Loader></Loader>
    }
   
    return (
        <div className=" md:px-16 " >
            <div>
                <div className=' container mx-auto'>
                    <div className='w-full bg-primary flex justify-between items-center md:hidden'>

                        <div className="dropdown">
                            <label tabIndex="2" className=" lg:hidden  ">
                                <FontAwesomeIcon icon={faBars} className="text-3xl py-4 px-4"></FontAwesomeIcon>
                            </label>
                            {/* <label className="btn m-1">Click</label> */}
                            <ul tabIndex="2" className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/dashboard">Dashboard</Link></li>
                                <li><Link to="/blogs">Blogs</Link></li>
                                <li><Link to="/portfolio">My Portfolio</Link></li>
                            </ul>
                        </div>
                        <div className="dropdown dropdown-left ">
                            <label tabIndex="0" htmlFor='userCheck'>
                                <div className='flex cursor-pointer items-center px-3'>
                                    <FontAwesomeIcon icon={faUser} className=" py-2 "></FontAwesomeIcon>
                                    {user?.displayName}
                                    <FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon>
                                </div>
                            </label>
                            <ul tabIndex="0" className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                user ? <>
                                    <li onClick={async () => {
                                        await signOut(auth)
                                        swal("Sign out", "Sign out successful", "success")
                                        navigate("/")

                                    }} className="cursor-pointer">Logout</li></> : <>
                                    <li><Link to="/login">Login</Link></li>
                                    <li><Link to="/register">Register</Link></li>
                                </>
                            }
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
            <div className="hidden  lg:flex justify-between w-full border ">
                <div className='w-1/2 flex justify-evenly text-xl p-4'>
                    <Link to="/">Home</Link>
                    <Link to="/dashboard">Dashboard</Link>
                 <Link to="/blogs">Blogs</Link>
                    <Link to="/portfolio">My Portfolio</Link>
                </div>
                <div>
                    <div className="dropdown dropdown-hover">
                        <label tabIndex="0">
                            <div className='bg-primary p-4 cursor-pointer'>
                                <FontAwesomeIcon icon={faUser} className="mr-2"></FontAwesomeIcon>
                                <span>{user?.displayName}</span>
                                <FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon>
                            </div>
                        </label>
                        <ul tabIndex="0" className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                user ? <>
                                    <li onClick={async () => {
                                        await signOut(auth)
                                        swal("Sign out", "Sign out successful", "success")
                                        navigate("/")

                                    }} className="cursor-pointer">Logout</li></> : <>
                                    <li><Link to="/login">Login</Link></li>
                                    <li><Link to="/register">Register</Link></li>
                                </>
                            }


                        </ul>
                    </div>

                </div>
            </div>
            {/* <div className="navbar-end">
                <a className="btn">Get started</a>
            </div> */}

        </div>
    );
};

export default NavigationBar;