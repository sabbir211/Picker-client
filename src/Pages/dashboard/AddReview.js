import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import ReactStars from "react-rating-stars-component";
import swal from 'sweetalert';
import auth from '../../firebase.init';
import Loader from '../Shared/Loader/Loader';

const AddReview = () => {
    const [rate, setRate] = useState(0)
    const [user,loading]=useAuthState(auth)
    const { register, handleSubmit, reset } = useForm();
    const ratingChanged = (newRating) => {
        setRate(newRating);
    };
    if (loading) {
        return <Loader></Loader>
        
    }
    const handleRatting = (data) => {
        const description = data.description
        const name=user?.displayName
        const rateData = { description: description, ratting: rate, name:name}
        fetch(`https://picker-server-production.up.railway.app/ratting`, {
            method: "post",
            headers: {
                "content-type": "application/json"
            }
            ,
            body: JSON.stringify(rateData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    swal("SUCCESS", ' Ratting added successfully', "success")
                    reset()
                }

            })
    }
    return (
        <div className='flex justify-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title"> Add a Review</h2>
                    <form onSubmit={handleSubmit(handleRatting)}>
                        <textarea {...register("description")} required className="textarea textarea-bordered" ></textarea>
                        <p>Give Ratting</p>
                        <ReactStars
                            count={5}
                            onChange={ratingChanged}
                            size={24}
                            activeColor="#ffd700"
                        />
                        <div className="card-actions justify-end">

                            <input type="submit" className="btn btn-primary" value="Submit" />
                        </div>

                    </form>


                </div>
            </div>


        </div >
    );
};

export default AddReview;