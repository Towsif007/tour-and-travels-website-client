import React from 'react';
import { Link } from 'react-router-dom';
import './tour.css'

const Tour = ({tour}) => {

    const {_id , name, Description, img} = tour;
    return (
        <div>
         <div className="card servicecare-card mb-5 mx-5">
        <img src={img} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">Name: {name}</h5>
            <p className="card-text fs-3">Details: {Description}</p>
            <Link to={`/orderpage/${_id}`}>
                <button className="btn btn-primary">Book Now</button>
            </Link>
        </div>
        </div>
        </div>
    );
};

export default Tour;