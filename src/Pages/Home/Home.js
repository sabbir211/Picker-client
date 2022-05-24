import React from 'react';
import Loader from '../Shared/Loader/Loader';
import Banner from './Banner/Banner';
import BusinessSummary from './BusinessSummary/BusinessSummary';
import Header from './Header/Header';
import Moto from './Moto/Moto';
import Tools from './Tools/Tools';

const Home = () => {
    // const x = [
    //     { img: "https://i.ibb.co/rHZ8JpT/Tire-Spacer.jpg" , description: " It increases the offset of the wheel, which results in an increase in the width of the tire’s distance", name:"Tire Spacer" , minOrder:15 , available: 50, price:410 , },
    //     { img: "https://i.ibb.co/4fcbDfJ/oxygen-sensor.jpg", description:" When functioning, the O2 sensor sends data to the management computer located within the engine." , name:"Oxygen Sensor" , minOrder: 20, available:30 , price:44 , },
    //     { img: "https://i.ibb.co/hRHXwgt/brake.jpg", description:"Depending on the type of brake system in your car, you can either have disc, drum brakes, or a combination of both" , name:"Brake" , minOrder: 10, available: 24, price:478 , },
    //     { img:"https://i.ibb.co/RpR8yGK/projector-headlights.jpg", description:"The projector design uses a reflector that is specially shaped to focus the light." , name: "Projector Headlight", minOrder:19, available: 40, price:879 , },
    //     { img: "https://i.ibb.co/pj2pbmf/TireRim.jpg", description:"We have Tire Rims in sizes 16 inches all the way up to 26 inches, we have some great deals on Tire Rims" , name:"Tire Rim" , minOrder: 18, available: 47, price: 154, },
    //     { img: "https://i.ibb.co/sWZ0d9H/Exhauster.jpg", description:"he material provides a sufficiently thick coating that covers the exhaust effectively." , name:"Exhauser " , minOrder: 16, available:78 , price:147 , },
    // ]
    //   console.log(JSON.stringify(x));

    return (
        <div>
            
            <Banner></Banner>
            <Moto></Moto>
            <Tools></Tools>
            <BusinessSummary></BusinessSummary>
        </div>
    );
};

export default Home;