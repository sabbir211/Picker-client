import React from 'react';
import { useNavigate } from 'react-router-dom';

const Tool = ({ tool }) => {
  const { img, name, description, available, price, _id } = tool
  const navigate = useNavigate()
  const handlePurchaseBtn = (id) => {
    navigate(`/purchase/${id}`)
  }
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl hover:shadow-2xl">
      <figure><img src={img} alt="Shoes" className='md:w-1/2 ' /></figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <p>available:{available}</p>
        <p> price:${price}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary"
            onClick={() => handlePurchaseBtn(_id)}
          >Purchase</button>
        </div>
      </div>
    </div>
  );
};

export default Tool;