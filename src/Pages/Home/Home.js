import React from 'react';
import Banner from './Banner/Banner';
import BusinessSummary from './BusinessSummary/BusinessSummary';
import ExtraSec from './ExtraSec/ExtraSec';

import Moto from './Moto/Moto';
import ShowRate from './ShowRate/ShowRate';
import Tools from './Tools/Tools';

const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            <Moto></Moto>
            <Tools></Tools>
            <ShowRate></ShowRate>
            <BusinessSummary></BusinessSummary>
           <ExtraSec></ExtraSec>
        </div>
    );
};

export default Home;