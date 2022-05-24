import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown, faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import NavigationBar from './NavigationBar';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate=useNavigate()
    return (
        <div>
            <div className='grid grid-cols-1   px-16  pt-6 pb-3 items-center md:grid-cols-4 justify-items-center md:justify-items-stretch'>
                <div>
                    <h1 className='cursor-pointer text-6xl font-semibold uppercase text-gray-700 pb-6 md:pb-0' onClick={()=>navigate("/")}>Picker</h1>
                </div>
                <div className="form-control col-span-2 hidden md:block">
                    <div className="input-group">
                        <input type="text" placeholder="Search Parts here ..." className="input bg-gray-100  focus:outline-none w-full" />
                        <button className="px-5 py-2 bg-primary  hover:bg-yellow-500 ">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </div>
                </div>

                <div>
                    <div className='flex justify-center'>
                        <div>
                            <p><span><FontAwesomeIcon icon={faHeart} className=" text-4xl " /></span> Wish List</p>
                        </div>
                        <div className='pl-6'>
                            <p>
                                <span><FontAwesomeIcon icon={faCartArrowDown} className=" text-3xl " /></span>
                                My Items
                            </p>
                        </div>
                    </div>
                </div>


            </div>
            <NavigationBar></NavigationBar>
        </div>

    );
};

export default Header;