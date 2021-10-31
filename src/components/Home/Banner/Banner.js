import React from 'react';
import banner from '../../../Images/Banner/banner.jpg'
import './Banner.css'

const Banner = () => {
    return (
        <div>
            <div className="banner container-fluid">
            <h1 className="heading text-dark p-4">Bangladesh Tours And Travel House</h1>
            <img src={banner} className="img-fluid " alt="..."></img>
            </div>
        </div>
    );
};

export default Banner;