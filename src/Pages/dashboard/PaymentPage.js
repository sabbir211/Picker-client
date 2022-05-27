import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import swal from 'sweetalert';
import Loader from '../Shared/Loader/Loader';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe('pk_test_51L3UhfBNkSNOWAa15sGjHJRrCFqXjCnM62fxBaRElHDD2CSvKK1w8gx1kDJ86oC2PFNDsKR5AgQTB1f0UXK8IVdw00KYx6nULU');
const PaymentPage = () => {
    const { id } = useParams()
    const { data, isLoading } = useQuery(['booking', id], () => fetch(`https://picker-pial.herokuapp.com/payment/${id}`, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
   
    if (isLoading) {
        return <Loader></Loader>
    }
    const {userName,totalAmount,_id}=data
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">{data?.toolName}</h2>
                    <p>Delivery address: {data?.address}</p>
                    <p>Phone Number:{data?.phone}</p>
                    <p> Quantity:{data?.orderQuantity}</p>
                    <p> Total amount:{data?.totalAmount}</p>

                   
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">                 
                        <Elements stripe={stripePromise}>
                            <CheckoutForm totalAmount={totalAmount} userName={userName} id={_id}/>
                        </Elements>
                 
                </div>
            </div>
        </div>

    );
};

export default PaymentPage;