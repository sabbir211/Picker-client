import React from 'react';
// import "./footer.css"
// import facebook from "../../../images/Logo/facebook2.png"
// import linkedin from "../../../images/Logo/linkedin.png"
// import twitter from "../../../images/Logo/twitter.png"
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot, faMobile, faPhone } from '@fortawesome/free-solid-svg-icons';
const Footer = () => {
    const { register, handleSubmit,reset } = useForm();

    const handleSubscribe = (e) => {
       reset()
    }
    const date=new Date()
    const year=date.getFullYear()
    return (
        <div className='bg-orange-300'>
            <div className='grid grid-cols-1 md:grid-cols-3 p-8'>
                <div>
                    <h2>CONTACT INFO</h2>
                    <p className="my-3">
                        <FontAwesomeIcon icon={faLocationDot} className="mr-2 "></FontAwesomeIcon>
                        20/13 Fulbari,Natore,Bangladesh
                        </p>
                    <p className="my-3">
                    <FontAwesomeIcon icon={faEnvelope} className="mr-2 "></FontAwesomeIcon>

                        sabbir21122@gmail.com
                        </p>
                    <p className="my-3"> 
                    <FontAwesomeIcon icon={faPhone} className="mr-2 "></FontAwesomeIcon>

                        +8801756035663
                        </p>
                   
                </div>
                <div>
                    <h2>Useful links</h2>
                    <Link className='text-white text-decoration-none pt-4 block' to="/"> HOME</Link>
                    <Link className='text-white text-decoration-none pt-4 block' to="/blogs">BLOGS</Link>
                    <Link className='text-white text-decoration-none pt-4 block' to="/dashboard">Dashboard</Link>
                    <Link className='text-white text-decoration-none pt-4 block' to="/portfolio">Portfolio</Link>
                </div>
                <div>
                    <form onSubmit={handleSubmit(handleSubscribe)}>
                        <div className=' my-3'>
                                <input id='email' type="email"  placeholder="Type email" className="input input-bordered w-full max-w-xs" {...register("email")}/>
                        </div>
                        <input type="submit" value="Subscribe" className='btn btn-outline-primary rounded-pill w-100' />
                    </form>

                </div>

            </div>
            <div className='my-2 py-2 copyRights text-center'>
                <p>&copy;{year} Picker.All Rights Reserved </p>
            </div>
        </div>
    );
};

export default Footer;