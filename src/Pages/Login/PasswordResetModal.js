import React from 'react';
import { useForm } from 'react-hook-form';

const PasswordResetModal = () => {
    const { register, handleSubmit } = useForm();
    const handleReset=(data)=>{
console.log(data);
document.getElementById("resetModal").checked=false
    }
    return (
        <div>
            <input type="checkbox" id="resetModal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h2 className='font-bold text-lg'>Reset Your Password by sending Email on your email</h2>
                    <form onSubmit={handleSubmit(handleReset)}>
                        <input {...register("email",{required:true})} type="text" placeholder="example@mail.com" class="input input-bordered w-full max-w-xs" id='email' /> 

                        <input type="submit" class="btn" value="submit" />
                      
                    </form>
                    
                </div>
            </div>
        </div>
    );
};

export default PasswordResetModal;