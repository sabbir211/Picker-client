import React from 'react';
import contact from "../../images/2798167.jpg"
const ContactInfo = () => {
    return (
        <div className="hero ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={contact} className="max-w-sm rounded-lg " alt='' />
                <div>
                    <h1 className="text-5xl font-bold">Contact information</h1>
                    <div className="py-6">
                        <p>sabbir21122@gmail.com</p>
                        <p>+880 1315120956</p>
                        <address>
                            <p>Natore,Rajshahi,Bangladesh</p>
                        </address>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ContactInfo;