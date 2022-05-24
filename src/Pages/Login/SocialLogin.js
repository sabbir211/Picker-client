import React, { useEffect } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import auth from "../../firebase.init"
import useToken from '../../Hooks/useToken';
import Loader from '../Shared/Loader/Loader';
const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate()
    const [token]=useToken(user)
    useEffect(() => {
        if (token) {
            navigate("/")
        }
    }, [user,navigate,token])
    if(loading){
     
        return <Loader></Loader>	
    }
    if(error){
       swal('SIGN IN ',error.message,"error")
    }

    return (
        <div>
            <div className="divider">OR</div>
            {error && error.message}
            <button className="btn btn-outline btn-accent w-full"
                onClick={() => {
                    signInWithGoogle()
                }}
            >Continue with google</button>
        </div>
    );
};

export default SocialLogin;