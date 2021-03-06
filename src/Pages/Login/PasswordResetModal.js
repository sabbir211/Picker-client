import React from 'react';
import { useForm } from 'react-hook-form';

const PasswordResetModal = () => {
    const { register, handleSubmit } = useForm();
    const handleReset=(data)=>{
document.getElementById("resetModal").checked=false
    }
    return (
        <div>
            <input type="checkbox" id="resetModal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h2 className='font-bold text-lg'>Reset Your Password by sending Email on your email</h2>
                    <form onSubmit={handleSubmit(handleReset)}>
                        <input {...register("email",{required:true})} type="text" placeholder="example@mail.com" className="input input-bordered w-full max-w-xs" id='email' /> 

                        <input type="submit" className="btn" value="submit" />
                      
                    </form>
                    
                </div>
            </div>
        </div>
    );
};

export default PasswordResetModal;