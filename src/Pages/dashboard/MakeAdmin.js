import React from 'react';
import {  useQuery } from 'react-query'
import Loader from '../Shared/Loader/Loader';
import SingleUser from './SingleUser';


const MakeAdmin = () => {
 const {data,isLoading,refetch}=useQuery("users",()=>fetch('http://localhost:5000/users',{method:"get",    
 headers:{
         authorization:`bearer ${localStorage.getItem("accessToken")}`
     }}).then(res=>res.json()))
 if(isLoading){
     return <Loader></Loader>
 }
console.log(data);
    return (
        <div>
           <div class="overflow-x-auto">
  <table class="table w-full">
    <thead>
      <tr>
        <th></th>
        <th>Email</th>
        <th>Role</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
        { 
            data.map((user,index)=><SingleUser  user={user} key={index} count={index} refetch={refetch}></SingleUser>)
        }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MakeAdmin;