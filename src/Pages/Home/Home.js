import React from 'react';
import Banner from './Banner/Banner';
import Header from './Header/Header';
import Moto from './Moto/Moto';
import Tools from './Tools/Tools';

const Home = () => {
    return (
        <div>      
            <Header></Header>
            <Banner></Banner>
            <Moto></Moto>
            <Tools></Tools>
        </div>
    );
};

export default Home;