import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './OrderPage.css'
import { Link } from 'react-router-dom';

const OrderPage = () => {
    const { register, handleSubmit,formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
    }
  

    const {user} = useAuth();
    const {tourId} = useParams();
    const [tour, setTour] = useState({})

    useEffect( ()=>{
        fetch(`https://creepy-ghoul-13388.herokuapp.com/tours/${tourId}`)
        .then(res => res.json())
        .then(data =>setTour(data))
    }, [])


    return (
        <div className="order-form">
        <h1>Order Page: {tourId}</h1>
        <div className="orderPage">
         <img src={tour.img} className="card-img-top img my-5" alt="..."/>
        <div className="card-body">
        <h1>Name: {tour.name}</h1>
        <p className="card-text fs-1">Description: {tour.Description}</p>
        </div>
         </div>

        
        <div className="order-form">
         <form  onSubmit={handleSubmit(onSubmit)}>

      <input defaultValue={user.displayName} {...register("name")} />
    
      <input defaultValue={user.email} {...register("email", { required: true })} />

      {errors.email && <p className="error">This field is required</p>}
      <input placeholder="Address" defaultValue="" {...register("address", { required: true })} />
      <input placeholder="City" defaultValue=""{...register("city", { required: true })} />
      <input placeholder="Phone number" defaultValue="" {...register("phone no", { required: true })} />

            <h4>Your Order Details</h4>
      <input defaultValue={tourId}placeholder="Tour id" {...register("id")}/>
      <input defaultValue={tour.name}placeholder="Name" {...register("tourname")}/>
      <textarea defaultValue={tour.Description}  placeholder="Description"{...register("Description")} />
      
      {/* <input className="btn btn-warning" placeholder=""type="submit" /> */}
      <Link to={`/myorders/${tourId}`}><input className="btn btn-warning" placeholder=""type="submit" /></Link>
    </form>
    </div>
        </div>
    );
};

export default OrderPage;