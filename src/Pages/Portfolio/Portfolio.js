import React from 'react';
import ContactInfo from './ContactInfo';
import Education from './Education';
import Projects from './Projects';
import Technologies from './Technologies';

const Portfolio = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ "backgroundImage": "url(https://i.ibb.co/rfjy1k9/jake-weirick-Esvpm-Q4zp5-Y-unsplash.jpg)" }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold uppercase">Sabbir Alam</h1>
                    <p className="mb-5">MERN STACK DEVELOPER</p>
                    <button className="btn btn-primary  rounded-full btn-outline mr-4">Explore Work</button>
                    <button className="btn btn-primary  rounded-full btn-outline">Contact info</button>
                </div>
            </div>
        </div>  
        <Technologies></Technologies>
        <ContactInfo></ContactInfo>
        <Education></Education>
        <Projects></Projects>
        </div>
      
    );
};

export default Portfolio;