import React from 'react';
import CountUp, { useCountUp } from 'react-countup';
import { faBoxesPacking, faCar, faCoffee, faHandshake, faSquarePlus, faTruck, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./BusinessSummary.css"
const BusinessSummary = () => {

    return (
        <div className='bg-base-200 mx-auto md:p-7 md:m-7 m-4 text-center'>
            <h1 className='text-center my-11 text-6xl uppercase'>Millions of Trusts </h1>
            <h1 className='text-center my-11 text-4xl uppercase'>try to understand Users expectation</h1>
            <div className=' container grid grid-cols-2  md:grid-cols-4'>
                <div className='text-center fw-bolder'>
                    <FontAwesomeIcon icon={faUserGroup} className="icons"></FontAwesomeIcon>
                    <p className='text-4xl numbers'><CountUp start={110} end={3400} ></CountUp>+</p>
                    <small className="text-2xl">USERS</small>
                </div>
                <div className='text-center fw-bolder'>
                    <FontAwesomeIcon icon={faSquarePlus} className="icons"></FontAwesomeIcon>

                    <p className='text-4xl numbers'><CountUp start={100} end={1124} ></CountUp>+</p>
                    <small className="text-2xl">Tools Added</small>
                </div>
                <div className='text-center fw-bolder'>
                    <FontAwesomeIcon icon={faTruck} className="icons"></FontAwesomeIcon>
                    <p className='text-4xl numbers'><CountUp start={0} end={860} ></CountUp>+</p>
                    <small className="text-2xl">Delivered</small>
                </div>
                <div className='text-center fw-bolder'>
                    <FontAwesomeIcon icon={faHandshake} className="icons"></FontAwesomeIcon>
                    <p className='text-4xl numbers'><CountUp start={0} end={1840} ></CountUp>+</p>
                    <small className="text-2xl" >Contributor</small>
                </div>
            </div>
        </div>

    );
};

export default BusinessSummary;