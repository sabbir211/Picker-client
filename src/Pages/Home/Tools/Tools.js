import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import swal from 'sweetalert';
import Loader from '../../Shared/Loader/Loader';
import Tool from './Tool';

const Tools = () => {
    const { isLoading, error, data } = useQuery('tools', () =>axios.get('https://picker-pial.herokuapp.com/tools')
   
    )
    if (isLoading) {
        return <Loader></Loader>
    }

if(error){
    swal("ERROR",error.message,"error")
}
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-3 container mx-auto'>
           {
               data?.data.map(tool=><Tool tool={tool} key={tool._id}></Tool>)
           }
        </div>
    );
};

export default Tools;