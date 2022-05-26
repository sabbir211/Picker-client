import React from 'react';

const Order = ({order,index,setOrderDelete}) => {
    const {toolName,orderQuantity,totalAmount,status}=order
    return (
        <tr>
        <th>{index}</th>
        <td>{toolName}</td>
        <td>{orderQuantity}</td>
        <td>{totalAmount} $</td>
        <td>{status === "pending" ? <button className='btn btn-sm btn-primary'>Pay</button> : "Paid"}</td>
        <td>{status === "pending" ? <label htmlFor="cancel-modal" className="btn modal-button bg-red-600" onClick={()=>setOrderDelete(order)} >Cancel Order</label> : "Already deliverd"}</td>
    </tr>
    );
};

export default Order;