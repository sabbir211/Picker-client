import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import swal from 'sweetalert';
import auth from '../../firebase.init';
import Loader from '../Shared/Loader/Loader';
import CancelModal from './CancelModal';
import Order from './Order';

const MyOrders = () => {
    const [user, loading] = useAuthState(auth)
    const [orderDelete, setOrderDelete] = useState({})

    const { isLoading, error, data, refetch } = useQuery('singleItem', () => fetch(`http://localhost:5000/orders?email=${user.email}`, {
        headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`
        }
    }).then(res => res.json()))

    if (isLoading || loading) {
        return <Loader></Loader>;
    }
    if (error) {
        swal("ERROR", error.message, "error")
    }
    return (
        <div>
            <h1>My Orders</h1>
            <div className="overflow-x-auto">

                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Total price</th>
                            <th>Payment</th>
                            <th>Order</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.length > 0 &&
                            data.map((b, index) => <Order setOrderDelete={setOrderDelete} order={b} key={b._id} index={index}></Order>)
                        }
                    </tbody>
                </table>
                <CancelModal orderDelete={orderDelete} refetch={refetch}></CancelModal>

            </div>
        </div>
    );
};

export default MyOrders;