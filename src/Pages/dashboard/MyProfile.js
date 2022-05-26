import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import Loader from '../Shared/Loader/Loader';

const MyProfile = () => {
    const [user, loading] = useAuthState(auth)
    const { register, handleSubmit, reset } = useForm();
    const [userInfo, setUserInfo] = useState({})
    const [updatedUser, setUpdatedUser] = useState({})
    useEffect(() => {
        const update = async () => {
            fetch(`http://localhost:5000/user/${user.email}`, {
                method: "put",
                headers: {
                    "content-type": "application/json",
                    authorization: `bearer ${localStorage.getItem("accessToken")}`
                }
                , body: JSON.stringify(userInfo)
            }).then(res => res.json())
                .then(data => {
                    fetch(`http://localhost:5000/user/${user.email}`, {
                        method: "get",
                        headers: {
                            "content-type": "application/json",
                            authorization: `bearer ${localStorage.getItem("accessToken")}`
                        }
                    }).then(res => res.json())
                        .then(data => {
                            console.log(data);
                            setUpdatedUser(data)
                        })
                })
        }
        update()

    }, [userInfo, user.email])
    if (loading) {
        return <Loader></Loader>
    }
    console.log(updatedUser);
    const handleUpdate = async (data) => {
        setUserInfo(data)
        reset()

    }

    return (
        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <div class="text-center lg:text-left">
                    <div class="avatar">
                        <div class="w-24 rounded">
                            <img src={updatedUser?.photoUrl} alt='' />
                        </div>
                    </div>
                    <h1 class="text-5xl font-bold">Hello {user?.displayName}</h1>
                    <p class="py-6">Your Email: {user?.email}</p>
                    <p class="py-6">Education:{updatedUser?.education}</p>
                    <p class="py-6">Location: {updatedUser?.location}</p>
                    <p class="py-6">Linkedin Profile{updatedUser?.linkedin}</p>

                </div>
                <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(handleUpdate)}>
                        <div class="card-body">
                            <h1 className='text-primary text-2xl text-center'>Update Profile</h1>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Education</span>
                                </label>
                                <input {...register("education")} type="text" placeholder="text" class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Location</span>
                                </label>
                                <input  {...register("location")} type="text" placeholder="text" class="input input-bordered" />

                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Linkedin Profile</span>
                                </label>
                                <input  {...register("linkedin")} type="text" placeholder="text" class="input input-bordered" />

                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Photo URL</span>
                                </label>
                                <input  {...register("photoUrl")} type="text" placeholder="text" class="input input-bordered" />

                            </div>
                            <div class="form-control mt-6">
                                <button class="btn btn-primary">Update</button>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default MyProfile;