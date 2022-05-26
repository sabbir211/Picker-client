import React from 'react';
import { Link } from 'react-router-dom';

const Order = ({order,index,setOrderDelete}) => {
    const {toolName,orderQuantity,totalAmount,status,_id}=order
    return (
        <tr>
        <th>{index}</th>
        <td>{toolName}</td>
        <td>{orderQuantity}</td>
        <td>{totalAmount} $</td>
        <td>{status === "pending" ? <Link to={`/dashboard/paymentpage/${_id}`} className='btn btn-sm btn-primary'>Pay</Link> : <> 
        <i className='text-xs text-green-500'>paid</i><br />
        <small className='text-xs text-green-500'>Transaction ID:{order?.transactionId}</small>
        </>}</td>
        <td>{status === "pending" ? <label htmlFor="cancel-modal" className="btn modal-button bg-red-600" onClick={()=>setOrderDelete(order)} >Cancel Order</label> : "Already deliverd"}</td>
    </tr>
    );
};

export default Order;