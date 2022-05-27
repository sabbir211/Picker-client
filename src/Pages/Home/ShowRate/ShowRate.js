import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import Loader from '../../Shared/Loader/Loader';

const ShowRate = () => {
    const [rate, setRate] = useState([])
    const [load, setLoad] = useState(false)
    useEffect(() => {
        setLoad(true)
        fetch('http://localhost:5000/ratting', {
            headers: {
                authorization: `bearer ${localStorage.getItem("accessToken")}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setRate(data)
                setLoad(false)
            })
    }, [])
    if (load) {
        return <Loader></Loader>

    }
    console.log(rate);
    return (
        <div className=''>
            <h1 className='text-4xl text-center md:my-11 my-4'>User Reviews</h1>
         <div className='my-4 mx-5 grid grid-cols-3'>
            {
                rate.map(r => {
                    return (
                        <div class="card w-96 bg-base-100 shadow-xl">
                            <div class="card-body">
                                <h2 class="card-title"> {r?.name}</h2>
                                <p>{
                                    [...Array(r.ratting).keys()].map(x=><FontAwesomeIcon className='text-primary' icon={faStar}></FontAwesomeIcon>)
                                }</p>
                                <p>Ratting: {r?.ratting}</p>
                                <p>{r?.description}</p>

                            </div>
                        </div>
                    )
                })
            }
        </div>   
        </div>
        
    );
};

export default ShowRate;