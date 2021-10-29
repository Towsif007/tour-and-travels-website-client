import React from 'react';
import banner from '../../../Images/Banner/banner.jpg'

const Banner = () => {
    return (
        <div>
            <div>
            <h1 className="heading text-dark p-4">Bangladesh Tours And Travel House</h1>
            <img src={banner} class="img-fluid" alt="..."></img>
            </div>
        </div>
    );
};

export default Banner;