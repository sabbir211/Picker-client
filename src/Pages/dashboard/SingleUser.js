import React from 'react';
import { useQuery } from 'react-query';
import swal from 'sweetalert';

const SingleUser = ({ user, count, refetch }) => {
    const email = user?.email
    const handleMakeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: "PUT",
            headers: {
                authorization: `bearer ${localStorage.getItem("accessToken")}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    swal('Make admin', "making admin successfull ", "success")
                    refetch()
                }

               else{
                   swal("sorry","You can not make admin","error")
               }
            })
    }

    return (
        <tr>
            <th>{count}</th>
            <td>{email}</td>
            <td>{user?.role !== "admin" ? <button onClick={handleMakeAdmin} className="btn btn-xs btn-primary">make admin</button>:<p>Already admin</p>}</td>
            <td><button className='btn btn-sm bg-red-500 '>delete user</button></td>
        </tr>
    );
};

export default SingleUser;