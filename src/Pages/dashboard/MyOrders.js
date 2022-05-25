import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loader from '../Shared/Loader/Loader';

const MyOrders = () => {
    const [orders, setOrders] = useState([])
    const [user] = useAuthState(auth)
    const [loading,setLoading]=useState(false)

    useEffect(() => {
        setLoading(true)
        fetch(`http://localhost:5000/orders?email=${user.email}`,{
            headers:{
                authorization:`bearer ${localStorage.getItem("accessToken")}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setOrders(data)
                setLoading(false)
            })
            .catch(error=>console.log(error))
    }, [user.email])
    console.log(orders);
    if (loading) {
        return <Loader></Loader>
    }
    return (
        <div>
            <h1>My Orders</h1>
            <div class="overflow-x-auto">

                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Total price</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        { orders.length &&
                            orders.map((b, index) => {
                             return   <tr>
                                    <th>{index}</th>
                                    <td>{b.toolName}</td>
                                    <td>{b.orderQuantity}</td>
                                    <td>{b.totalAmount} $</td>

                                    <td>{b.status==="pending" ?<button className='btn btn-sm btn-primary'>Pay</button>:"Paid"}</td>
                                </tr>
                            })
                        }

                       
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;