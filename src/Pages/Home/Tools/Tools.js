import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import swal from 'sweetalert';
import Loader from '../../Shared/Loader/Loader';
import Tool from './Tool';

const Tools = () => {
    const { isLoading, error, data } = useQuery('tools', () =>axios.get('https://picker-server-production.up.railway.app/tools')
   
    )
    if (isLoading) {
        return <Loader></Loader>
    }

if(error){
    swal("ERROR",error.message,"error")
}
    return (
        <div className="mx-8 md:mx-20">
            <div className='grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3 gap-6'>
           {
               data?.data.map(tool=><Tool tool={tool} key={tool._id}></Tool>)
           }
        </div>
        </div>
    );
};

export default Tools;