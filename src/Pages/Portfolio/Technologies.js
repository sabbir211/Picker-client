import React from 'react';
import skillImg from "../../images/20945770.jpg"
const Technologies = () => {
    return (
        <div class="hero ">
            <div class="hero-content flex-col lg:flex-row">
                <img src={skillImg} class="max-w-sm rounded-lg " alt='' />
                <div className='flex flex-col '>
                    <h1 class="text-5xl font-bold">Technologies i know</h1>
                    <div className="shadow-lg p-2 hover:shadow-xl"> 
                     <span className="text-2xl bg-base-100  rounded-full">HTML </span>
                    <progress class="progress progress-accent w-56" value="100" max="100"></progress>
                    </div>
                    <div className="shadow-lg p-2 hover:shadow-xl"> 
                     <span className="text-2xl bg-base-100  rounded-full">CSS </span>
                    <progress class="progress progress-accent w-56" value="95" max="100"></progress>
                    </div>
                    <div className="shadow-lg p-2 hover:shadow-xl"> 
                     <span className="text-2xl bg-base-100  rounded-full">Bootstrap </span>
                    <progress class="progress progress-accent w-56" value="90" max="100"></progress>
                    </div>
                    <div className="shadow-lg p-2 hover:shadow-xl"> 
                     <span className="text-2xl bg-base-100  rounded-full">Tailwind </span>
                    <progress class="progress progress-accent w-56" value="80" max="100"></progress>
                    </div>
                    <div className='shadow-lg p-2 hover:shadow-xl'> 
                     <span className="text-2xl bg-base-100  rounded-full">JavaScrip </span>
                    <progress class="progress progress-accent w-56" value="85" max="100"></progress>
                    </div>
                    <div className="shadow-lg p-2 hover:shadow-xl"> 
                     <span className="text-2xl bg-base-100  rounded-full">React  </span>
                    <progress class="progress progress-accent w-56" value="70" max="100"></progress>
                    </div>
                    <div className="shadow-lg p-2 hover:shadow-xl"> 
                     <span className="text-2xl bg-base-100  rounded-full">Node js  </span>
                    <progress class="progress progress-accent w-56" value="60" max="100"></progress>
                    </div>
                    <div className="shadow-lg p-2 hover:shadow-xl"> 
                     <span className="text-2xl bg-base-100  rounded-full">Express js  </span>
                    <progress class="progress progress-accent w-56" value="50" max="100"></progress>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Technologies;