import { faCreditCard } from '@fortawesome/free-regular-svg-icons';
import { faHandHoldingDollar, faHeadphones, faHeadphonesSimple, faHeadSideCoughSlash, faMoneyCheck, faPersonCane, faPersonWalking, faTruckFast } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Moto = () => {
    return (
        <div className='border m-8 md:m-12'>
            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  justify-center '>
                <div className='p-4 flex '>
                    <FontAwesomeIcon icon={faTruckFast} className="text-5xl text-primary"></FontAwesomeIcon>
                    <div className='ml-4 '>
                        <h3 className='font-semibold text-xl'>Free Shipping</h3>
                        <p>Free shipping for all Bangladesh</p>
                    </div>
                    <div className="w-1 bg-gray-300 ml-8 h-full"></div>

                </div>
                <div className='p-4 flex'>
                    <FontAwesomeIcon icon={faHeadphonesSimple} className="text-5xl text-primary"></FontAwesomeIcon>
                    <div className='ml-4 '>
                        <h3 className='font-semibold text-xl'>24/7 Support</h3>
                        <p>Agent is ready for helping you </p>
                    </div>
                    <div className="w-1 bg-gray-300 ml-8"></div>
                </div>
                <div className='p-4 flex'>
                    <FontAwesomeIcon icon={faHandHoldingDollar} className="text-5xl text-primary"></FontAwesomeIcon>
                    <div className='ml-4 '>
                        <h3 className='font-semibold text-xl'>100 % Money back </h3>
                        <p>For any reason money will return</p>
                    </div>
                    <div className="w-1 bg-gray-300 ml-8"></div>
                </div>
                <div className='p-4 flex'>
                    <FontAwesomeIcon icon={faCreditCard} className="text-5xl text-primary"></FontAwesomeIcon>
                    <div className='ml-4'>
                        <h3 className='font-semibold text-xl'>Secure Payment</h3>
                        <p>We handle payment securely</p>
                    </div>
                    <div className="w-1 bg-gray-300 ml-8"></div>
                </div>

            </div>
        </div>


    );
};

export default Moto;