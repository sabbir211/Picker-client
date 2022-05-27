import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';

const AddTool = () => {
    const { register, handleSubmit, reset } = useForm();
    const apikey = "bde90ecfca12255e8ad1df800594abf0"
    const [loader, setLoader] = useState(false)

    const handleAdd = async (data) => {
        setLoader(true)
        const image = data.img[0];
        console.log(data);
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
                    console.log(result.data.url, "url");
                    const img = result.data.url;
                    const tool = {
                        name: data.name,
                        description: data.description,
                        price: data.price,
                        img: img,
                        minOrder: data.minOrder,
                        available: data.available
                    }
                    fetch(`http://localhost:5000/tools`, {
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
                            setLoader(true)
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
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Tool Name</span>
                    </label>
                    <input required {...register("name")} type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                </div>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Price</span>
                    </label>
                    <input required {...register("price")} type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                </div>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Min Quantity</span>
                    </label>
                    <input required {...register("minOrder")} type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                </div>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Available</span>
                    </label>
                    <input required {...register("available")} type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                </div>
                <div className='form-control w-full max-w-xs'>
                    <label class="label">
                        <span class="label-text">Image</span>
                    </label>
                    <input  {...register("img")} type="file" required class="block w-full text-sm text-slate-500
                        file:mr-4 file:py-2 file:px-4
                        file:rounded-full file:border-0
                        file:text-sm file:font-semibold
                    file:bg-violet-50 file:text-violet-700
                    hover:file:bg-violet-100
     "/>

                </div>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Short Description</span>
                    </label>
                    <textarea required {...register("description")} class="textarea textarea-bordered h-24" placeholder="description"></textarea>
                </div>

                <input type="submit" className='btn btn-primary w-full ' value="Add" />
            </form>
        </div>
    );
};

export default AddTool;