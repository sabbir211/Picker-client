import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import swal from 'sweetalert';
import auth from '../../firebase.init';
import Loader from '../Shared/Loader/Loader';

const Purchase = () => {
    const { id } = useParams()
    const [user, loading] = useAuthState(auth)
    const { register, handleSubmit } = useForm();
    const [orderError, setOrderError] = useState(false)
    const [totalAmount, setTotalAmount] = useState(0)
    const { isLoading, error, data } = useQuery('singleItem', () => fetch(`https://picker-pial.herokuapp.com/purchase/${id}`).then(res=>res.json()))
    if (isLoading || loading) {
        return <Loader></Loader>
    }
    if (error) {
        swal("Error", error.message, "error")
    }
    const { img, description, minOrder, price, name, available, _id } = data
    

    const handleOrderError = (e) => {
        
        setOrderError(false)
        const total = e.target.value * price
       
        setTotalAmount(total)
        if (minOrder > e.target.value || available < e.target.value) {
            setOrderError(true)
        }
    }



    // order placing here 
    const onSubmit = data => {
        const orderDetails = { ...data, totalAmount: totalAmount, toolName:name, status: "pending" }
        axios.post(`https://picker-pial.herokuapp.com/purchase`, orderDetails)
            .then(res =>{
                if (res.status===200) {
                    swal("Order Placed","check Dashboard page and pay for it","success")
                }
                else{
                    swal("Error","Something went wrong ","error")
                }
            })
    };
    return (
        <div className=' grid grid-cols-1 md:grid-cols-2 my-4'>
            <div className='ml-6 border text-center '>
                <img src={img} alt="" className='w-4/6' />
                <div className='hidden md:grid grid-cols-4 w-3/5 '>
                    <img src={img} alt="" />
                    <img src={img} alt="" />
                    <img src={img} alt="" />
                    <img src={img} alt="" />
                </div>
            </div>
            <div className="shadow p-5 md:p-14 ">
                <h1 className='text-5xl my-3'>{name}</h1>
                <p >{description}</p>
                <p className='text-3xl'>${price} Per unit</p>
                <div className='my-4'>
                    <div className='flex justify-between md:px-20 '>
                        <p>Available {available} </p>
                        <p>Minimum order {minOrder}</p>
                    </div>
                    <p className='text-3xl text-primary'>Your total order amount {totalAmount}$</p>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label className="label">
                            <span className="label-text">Enter Quantity.</span>
                        </label>
                        {
                            orderError && <div className="alert alert-warning shadow-lg">
                                <div className='my-3'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                                    <span>Warning: You have to chose Between {minOrder} to {available}</span>
                                </div>
                            </div>
                        }
                        <input {...register("orderQuantity")} onChange={handleOrderError}
                            required type="number" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
                        <input {...register("userName")} readOnly defaultValue={user.displayName} type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
                        <input {...register("email")} readOnly defaultValue={user.email} type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
                        <input {...register("phone")} type="text" required placeholder="Type phone number  required here" className="input input-bordered input-primary w-full max-w-xs" />
                        <input {...register("address")} type="text" placeholder="Type address here" required className="input input-bordered input-primary w-full max-w-xs" />
                        <input type="submit" disabled={orderError ? true : false} className='btn btn-primary' value="Place order" />
                    </form>


                </div>
            </div>
        </div>
    );
};

export default Purchase;