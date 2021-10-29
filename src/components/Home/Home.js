import React from 'react';
import About from './About/About';
import Banner from './Banner/Banner';
import Photos from './Photos/Photos';
import Tours from './Tours/Tours';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tours></Tours>
            <About></About>
            <Photos></Photos>
        </div>
    );
};

export default Home;