import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import Loader from '../../Shared/Loader/Loader';

const ShowRate = () => {
    const [rate, setRate] = useState([])
    const [load, setLoad] = useState(false)
    useEffect(() => {
        setLoad(true)
        fetch('https://picker-pial.herokuapp.com/ratting', {
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
   
    return (
        <div className=''>
            <h1 className='text-4xl text-center md:my-11 my-4'>User Reviews</h1>
         <div className='my-4 mx-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-6'>
            { rate.length>0 &&
                rate.map((r,index) => {
                    return (
                        <div className="card w-96 bg-base-100 shadow-xl" key={index}>
                            <div className="card-body">
                                <h2 className="card-title"> {r?.name}</h2>
                                <p>{
                                    [...Array(r?.ratting).keys()].map((x,index)=><FontAwesomeIcon key={index} className='text-primary' icon={faStar}></FontAwesomeIcon>)
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