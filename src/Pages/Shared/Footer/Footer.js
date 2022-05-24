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
            <div className='container mx-auto py-4 flex flex-column md:flex-row justify-between'>
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
                    {/* <div className='footImgContainer'>
                        <a href="https://www.facebook.com/sabbir1144" target="blank"> <img src={facebook} alt="" /></a>

                        <a href="linkedin.com/in/sabbir-alam-694438234"><img src={linkedin} alt="" /></a>
                        <img src={twitter} alt="" />
                    </div> */}
                </div>
                <div>
                    <h2>Useful links</h2>
                    <Link className='text-white text-decoration-none pt-4 block' to="/"> HOME</Link>
                    <Link className='text-white text-decoration-none pt-4 block' to="/blogs">BLOGS</Link>
                </div>
                <div>
                    <form onSubmit={handleSubmit(handleSubscribe)}>
                        <div className=' my-3'>
                            <label className='' htmlFor="email">Email</label>
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