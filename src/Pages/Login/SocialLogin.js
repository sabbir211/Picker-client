import React, { useEffect } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import auth from "../../firebase.init"
import useToken from '../../Hooks/useToken';
import Loader from '../Shared/Loader/Loader';
const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate()
    const [token]=useToken(user)
    const location=useLocation()
    let from = location.state?.from?.pathname || "/";
    useEffect(() => {
        if (token) {
            navigate(from,{replace:true})
        }
    }, [user,navigate,token,from])
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