import React from 'react';

const Tool = ({tool}) => {
    const {img,name,description,available,price}=tool
    return (
        <div class="card card-compact w-96 bg-base-100 shadow-xl hover:shadow-2xl">
        <figure><img src={img} alt="Shoes" className='md:w-1/2 '/></figure>
        <div class="card-body">
          <h2 class="card-title">{name}</h2>
          <p>{description}</p>
          <p>available:{available}</p>
          <p> price:${price}</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Purchase</button>
          </div>
        </div>
      </div>
    );
};

export default Tool;