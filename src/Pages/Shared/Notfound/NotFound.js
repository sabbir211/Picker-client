import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div class="hero min-h-screen" style={{"background-image": "url(https://i.ibb.co/W0YtTKd/Not-Found-Bg.jpg)"}}>
        <div class="hero-overlay bg-opacity-50"></div>
        <div class="hero-content text-center text-neutral-content">
          <div class="max-w-md">
            <h1 class="mb-5 text-5xl font-bold text-white">404</h1>
            <p class="mb-5 text-white uppercase text-2xl">Sorry the Page You are Looking for is unavailable.</p>
            <p class="mb-5 text-white">Please go home to explore</p>
            <Link to="/" class="btn btn-primary">Home</Link>
          </div>
        </div>
      </div>
    );
};

export default NotFound;