import React from 'react';
import { useForm } from 'react-hook-form';

const AddTool = () => {
    const { register, handleSubmit, reset } = useForm();
    const handleAdd = (data) => {
        console.log(data);
        fetch(`http://localhost:5000/tools`,{
           method:"post",
           headers:{
               "content-type":"application/json"
           } 
           ,
           body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
        })
        // reset()
    }
    return (
        <div>
            <h2 className='text-2xl text-primary text-center'>Add A New Tool </h2>
            <form onSubmit={handleSubmit(handleAdd)} className='grid grid-cols-1 md:grid-cols-3 px-4'>
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
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Image</span>
                    </label>
                    <input required {...register("img")} type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                </div>
                <div class="form-control">
                    <label class="label">
                        <span class="label-text">Short Description</span>
                    </label>
                    <textarea required {...register("description")} class="textarea textarea-bordered h-24" placeholder="description"></textarea>
                </div>
                <input type="submit" className='btn btn-primary' value="Add" />
            </form>
        </div>
    );
};

export default AddTool;