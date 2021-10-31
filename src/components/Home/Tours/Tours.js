import React, { useEffect, useState } from 'react';
import Tour from '../Tour/Tour';
import './Tours.css'

const Tours = () => {
    const [tours, setTours] = useState([])
    useEffect(()=> {
        fetch('https://creepy-ghoul-13388.herokuapp.com/tours')
        .then(res => res.json())
        .then(data => setTours(data))
    }, [])


    return (
        <div >
            <h1>Welcome To Our Tour Programms</h1>
            <div className="tours-container">
                {
                    tours.map(tour =><Tour
                        key={tour._id}
                        tour={tour}
                    ></Tour>)
                }
            </div>
        </div>
    );
};

export default Tours;