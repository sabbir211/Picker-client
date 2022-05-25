import { faEnvelope, faEnvelopeSquare, faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';

import { Link, useLocation, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import auth from '../../firebase.init';
import useToken from '../../Hooks/useToken';
import Loader from '../Shared/Loader/Loader';
import PasswordResetModal from './PasswordResetModal';
import SocialLogin from './SocialLogin';

const Login = () => {
    const { register, handleSubmit } = useForm();
    const location = useLocation()
    const navigate = useNavigate()
    let from = location.state?.from?.pathname || "/";
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [token] = useToken(user)
    const onSubmit = data => {
        console.log(data)
        signInWithEmailAndPassword(data.email, data.password)
    };
    useEffect(() => {
        if (user) {
            swal("Login", "SuccessFully Logged in", "success")
            navigate(from, { replace: true })
        }
    }, [user,from,navigate])
    if (loading) {
        return <Loader></Loader>
    }
    if (error) {
        swal("Sorry", `${error.message.split("/")[1].split(")")[0]}`, "error")
    }

    return (
        <div className='flex justify-center min-h-screen items-center'>
            <div className="card w-96 bg-base-100 shadow-xl ">
                <div className="card-body">
                    <h2 className="text-xl text-center font-semibold">Login</h2>

                    <form onSubmit={handleSubmit(onSubmit)} className="form-control w-full max-w-xs">
                        <label className="label" htmlFor="email">
                            <span className="label-text"> Email</span>
                        </label>
                       
                        <label className="input-group">
                            <span className='bg-secondary '><FontAwesomeIcon className='text-2xl text-white' icon={faEnvelope}></FontAwesomeIcon></span>
                            <input {...register("email", { required: true })} type="text" placeholder="example@email.com" className=" focus:outline-none input input-bordered w-full max-w-xs" id='email' />
                        </label>
                        <label className="label" htmlFor='password'>
                            <span className="label-text"> Password</span>
                        </label>
                        <label className="input-group">
                        <span className='bg-secondary '><FontAwesomeIcon className='text-2xl text-white' icon={faLock}></FontAwesomeIcon></span>
                            <input {...register("password", { required: true })} type="password" placeholder="password" className="input input-bordered w-full max-w-xs focus:outline-none" id='password' />
                        </label>
                        
                        <label for="resetModal" className=" link-hover  modal-button">Forgot password ?</label>

                        <input type="submit" value="Login" className="btn btn-secondary mt-4 w-full max-w-xs" />

                    </form>
                    <p className='text-sm'>New to Picker? <Link to="/register" className='text-primary hover:underline'>create new account</Link> </p>
                    <SocialLogin></SocialLogin>
                    <PasswordResetModal></PasswordResetModal>
                </div>
            </div>
        </div>
    );
};

export default Login;