import React from 'react';

const Projects = () => {
    return (
        <div className='my-11 mx-4'> 
            <h1 className='text-4xl text-center'> MY WORKS </h1>
            <div className='grid grid-cols-1 md:grid-cols-3'>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title">Car house</h2>

                        <ul>
                            <li> Authentication with firebase </li>
                            <li> CRUD operation with MongoDB </li>
                            <li> Responsive design </li>
                        </ul>

                        <div class="card-actions justify-end">
                            <a href='https://car-house-57f8e.web.app/' target="blank" class="btn btn-primary">Visit Site</a>
                        </div>
                    </div>
                </div>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title">Capture Memory</h2>
                        <ul>
                            <li>Email password, Google, Github Login </li>
                            <li>Slider </li>
                            <li>Service Checkout </li>
                        </ul>

                        <div class="card-actions justify-end">
                            <a href='https://single-service-provider.web.app/' target="blank" class="btn btn-primary">Visit Site</a>
                        </div>
                    </div>
                </div>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title">The Car doctor</h2>
                        <p>Front end website.Full Responsive  for mobile,computer </p>
                        <div class="card-actions justify-end">
                            <a href='https://genius-car-service-91fdd.web.app/' target="blank" class="btn btn-primary">Visit Site</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;