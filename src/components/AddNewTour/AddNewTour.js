import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddNewTour.css'

const AddNewTour = () => {
    const { register, handleSubmit, reset } = useForm();


    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/addtours', data)
        .then(res => {
            if(res.data.insertedId){
                alert('Inserted successfully')
                reset()
            }
        })
    }


    return (
        <div className="addnewtour">
            <h1>Add a new tour</h1>
   <form onSubmit={handleSubmit(onSubmit)}>
    <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name"/>
      <textarea {...register("Description")} placeholder="Description" />
      <input {...register("img")} placeholder="Image url" />
     
      <input type="submit" />
    </form>
        </div>
    );
};

export default AddNewTour;