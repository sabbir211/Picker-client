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
            fetch(`https://picker-pial.herokuapp.com/user/${user.email}`, {
                method: "put",
                headers: {
                    "content-type": "application/json",
                    authorization: `bearer ${localStorage.getItem("accessToken")}`
                }
                , body: JSON.stringify(userInfo)
            }).then(res => res.json())
                .then(data => {
                    fetch(`https://picker-pial.herokuapp.com/user/${user.email}`, {
                        method: "get",
                        headers: {
                            "content-type": "application/json",
                            authorization: `bearer ${localStorage.getItem("accessToken")}`
                        }
                    }).then(res => res.json())
                        .then(data => {
                            
                            setUpdatedUser(data)
                        })
                })
        }
        update()

    }, [userInfo, user.email])
    if (loading) {
        return <Loader></Loader>
    }
    const handleUpdate = async (data) => {
        setUserInfo(data)
        reset()

    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <div className="avatar">
                        <div className="w-24 rounded">
                            <img src={updatedUser?.photoUrl} alt='' />
                        </div>
                    </div>
                    <h1 className="text-5xl font-bold">Hello {user?.displayName}</h1>
                    <p className="py-6">Your Email: {user?.email}</p>
                    <p className="py-6">Education:{updatedUser?.education}</p>
                    <p className="py-6">Location: {updatedUser?.location}</p>
                    <p className="py-6">Linkedin Profile{updatedUser?.linkedin}</p>

                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(handleUpdate)}>
                        <div className="card-body">
                            <h1 className='text-primary text-2xl text-center'>Update Profile</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Education</span>
                                </label>
                                <input {...register("education")} type="text" placeholder="text" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Location</span>
                                </label>
                                <input  {...register("location")} type="text" placeholder="text" className="input input-bordered" />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Linkedin Profile</span>
                                </label>
                                <input  {...register("linkedin")} type="text" placeholder="text" className="input input-bordered" />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input  {...register("photoUrl")} type="text" placeholder="text" className="input input-bordered" />

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Update</button>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default MyProfile;