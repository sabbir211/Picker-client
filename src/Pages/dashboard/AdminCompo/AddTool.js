import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';
import Loader from '../../Shared/Loader/Loader';

const AddTool = () => {
    const { register, handleSubmit, reset } = useForm();
    const apikey = "bde90ecfca12255e8ad1df800594abf0"
    

    const handleAdd = async (data) => {
        
        const image = data.img[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${apikey}`;
        
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const tool = {
                        name: data.name,
                        description: data.description,
                        price: data.price,
                        img: img,
                        minOrder: data.minOrder,
                        available: data.available
                    }
                    fetch(`https://picker-server-production.up.railway.app/tools`, {
                        method: "post",
                        headers: {
                            "content-type": "application/json"
                        }
                        ,
                        body: JSON.stringify(tool)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.insertedId) {
                                swal("SUCCESS", 'Tool added successfully', "success")
                            }
                          
                            reset()
                        })
                }
                
            })


    }
 
    //     })
    // }

    //     reset()
    return (
        <div className='flex flex-col justify-center'>
            <h2 className='text-2xl text-primary text-center'>Add A New Tool </h2>
            <form onSubmit={handleSubmit(handleAdd)} className='grid grid-cols-1 md:grid-cols-2 px-4 justify-center'>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Tool Name</span>
                    </label>
                    <input required {...register("name")} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input required {...register("price")} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Min Quantity</span>
                    </label>
                    <input required {...register("minOrder")} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Available</span>
                    </label>
                    <input required {...register("available")} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </div>
                <div className='form-control w-full max-w-xs'>
                    <label className="label">
                        <span className="label-text">Image</span>
                    </label>
                    <input  {...register("img")} type="file" required className="block w-full text-sm text-slate-500
                        file:mr-4 file:py-2 file:px-4
                        file:rounded-full file:border-0
                        file:text-sm file:font-semibold
                    file:bg-violet-50 file:text-violet-700
                    hover:file:bg-violet-100
     "/>

                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Short Description</span>
                    </label>
                    <textarea required {...register("description")} className="textarea textarea-bordered h-24" placeholder="description"></textarea>
                </div>

                <input type="submit" className='btn btn-primary w-full ' value="Add" />
            </form>
        </div>
    );
};

export default AddTool;