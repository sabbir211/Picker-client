import React from 'react';
import edu from '../../images/334.jpg'
const Education = () => {
    return (
        <div className="hero ">
            <div className="hero-content flex-col lg:flex-row ">
                <img src={edu} className="max-w-sm rounded-lg" alt='' />
                <div className='ml-12'>
                    <h1 className="text-5xl font-bold">Educational Information</h1>
                    <div className='py-6'>
                        <p >Bachelor of Science</p>
                        <p >Department of Zoology</p>
                        <p >Gopalpur college</p>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default Education;