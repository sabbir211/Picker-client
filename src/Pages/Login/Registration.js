import React, { useEffect } from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';

import { Link, useLocation, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import auth from '../../firebase.init';
import useToken from '../../Hooks/useToken';
import Loader from '../Shared/Loader/Loader';
import SocialLogin from './SocialLogin';

const Registration = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const navigate = useNavigate()
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const[token]=useToken(user)
    const onSubmit = async data => {
        await createUserWithEmailAndPassword(data.email, data.password, { sendEmailVerification: true })
       
        await updateProfile({ displayName: data.name })
    };

    useEffect(() => {
        if (token) {
            swal("Register success", "A verification Email has been sent to your mail. Please Verify email", "success")
            navigate(from, { replace: true })
        }
        if (error) {
            swal("Register error", `${error.message.split("/")[1].split(")")[0]}`, "error")
        }
    }, [user,error,from,navigate,token])

    if (loading) {
        return <Loader></Loader>
    }
    return (
        <div className='flex justify-center min-h-screen items-center'>
            <div className="card w-96 bg-base-100 shadow-xl ">
                <div className="card-body">
                    <h2 className="text-xl text-center font-semibold">Sign Up</h2>
                    <form onSubmit={handleSubmit(onSubmit)} className="form-control w-full max-w-xs">
                        <p className='text-red-500'>  {error && error.message.split("/")[1].split(")")[0]} </p>

                        <label className="label" htmlFor="name">
                            <span className="label-text"> Name</span>
                        </label>
                        <input {...register("name", { required: true, maxLength: 20 })} type="text" placeholder="john doe" className="input input-bordered w-full max-w-xs" id='name' />
                        <label className="label" htmlFor="email">
                            <span className="label-text"> Email</span>
                        </label>
                        <input {...register("email", { required: true })} type="email" placeholder="example@email.com" className="input input-bordered w-full max-w-xs" id='email' />
                        <label className="label" htmlFor='password'>
                            <span className="label-text"> Password</span>
                        </label>
                        <input {...register("password", { required: true, maxLength: 20 })} type="password" placeholder="password" className="input input-bordered w-full max-w-xs" id='password' />

                        <input type="submit" value="Sign up" className="btn btn-accent mt-4 w-full max-w-xs" />

                    </form>
                    <p className='text-sm'>Already have account? <Link to="/login" className='text-primary hover:underline'>Login </Link> </p>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default Registration;