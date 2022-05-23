import { faBars, faCaretDown, faHamburger, faUser, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
    return (
        <div className=" md:px-16">
            <div>
                <div className=' container mx-auto'>
                    <div className='w-full bg-primary flex justify-between items-center md:hidden'>

                        <div className="dropdown">
                            <label tabIndex="2" className=" lg:hidden  ">
                                <FontAwesomeIcon icon={faBars} className="text-3xl py-4 px-4"></FontAwesomeIcon>
                            </label>
                            {/* <label className="btn m-1">Click</label> */}
                            <ul tabIndex="2" className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                                <li><a>Item 1</a></li>
                                <li><a>Item 2</a></li>
                            </ul>
                        </div>
                        <div className="dropdown dropdown-left ">
                        <label tabIndex="0" htmlFor='userCheck'>
                            <div className='flex cursor-pointer'>                               
                                <FontAwesomeIcon icon={faUser} className="px-6 py-2 "></FontAwesomeIcon>
                            </div>
                        </label>
                        <ul tabIndex="0" className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Item 1</a></li>
                            <li><a>Item 2</a></li>
                        </ul>
                      </div>
                    </div>

                </div>
            </div>
            <div className="hidden  lg:flex justify-between w-full border ">
                <div className='w-1/2 flex justify-evenly text-xl p-4'>
                    <Link to="/">Left link</Link>
                    <Link to="/">Left link</Link>
                    <Link to="/">Left link</Link>
                    <Link to="/">Left link</Link>
                </div>
                <div>
                    <div className="dropdown dropdown-hover">
                        <label tabIndex="0">
                            <div className='bg-primary p-4 cursor-pointer'>
                                <FontAwesomeIcon icon={faUser} className="mr-2"></FontAwesomeIcon>
                                <span>My Account</span>
                                <FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon>
                            </div>
                        </label>
                        <ul tabIndex="0" className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Item 1</a></li>
                            <li><a>Item 2</a></li>
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