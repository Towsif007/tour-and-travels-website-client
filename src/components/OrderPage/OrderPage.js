import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './OrderPage.css'

const OrderPage = () => {
    const { register, handleSubmit,formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
  

    const {user} = useAuth();
    const {tourId} = useParams();
    const [tour, setTour] = useState({})

    useEffect( ()=>{
        fetch(`http://localhost:5000/tours/${tourId}`)
        .then(res => res.json())
        .then(data =>setTour(data))
    }, [])


    return (
        <div className="order-form">
        <h1>Order Page: {tourId}</h1>
        <div className="OrderPage">
         {/* <img src={tour.img} className="card-img-top img my-5" alt="..."/> */}
        <div className="card-body">
        <h1>Name: {tour.name}</h1>
        <p className="card-text fs-1">Description: {tour.Description}</p>
        </div>
         </div>

        

         <form className="order-form" onSubmit={handleSubmit(onSubmit)}>

      <input defaultValue={user.displayName} {...register("name")} />
    
      <input defaultValue={user.email} {...register("email", { required: true })} />

      {errors.email && <span className="error">This field is required</span>}
      <input placeholder="Address" defaultValue="" {...register("address")} />
      <input placeholder="City" defaultValue=""{...register("city")} />
      <input placeholder="Phone number" defaultValue="" {...register("phone no")} />
      
      <input className="btn btn-warning" placeholder=""type="submit" />
    </form>
        </div>
    );
};

export default OrderPage;