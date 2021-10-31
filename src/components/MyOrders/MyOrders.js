import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './MyOrders.css'

const MyOrders = () => {
    const {user} = useAuth();
    const [orders, setOrders] = useState([]);
    // const {tourId} = useParams();

    useEffect(()=>{
        fetch( `https://creepy-ghoul-13388.herokuapp.com/tours/${user?.email}`)
        .then(res => res.json())
        .then(data => setOrders(data))
    }, [user?.email])

    console.log(orders);
    return (
        <div>
            <h1>My Orders: {orders.length}</h1>
            <div className="myorders">
         <img src={orders.img} className="card-img-top img my-5" alt="..."/>
        <div className="card-body">
        <h1>Name: {orders.name}</h1>
        <p className="card-text fs-1">Description: {orders.Description}</p>
        </div>
        </div>
        </div>
            
    );
};

export default MyOrders;


// {event?.map((pd, index) => (
//     <tbody>
//       <tr>
//         <td>{index}</td>
//         <td>{pd.title}</td>
//         <td>{pd.description}</td>
//         <td>{pd.image}</td>
//         <button
//           onClick={() => handleDelete(pd._id)}
//           className="btn bg-danger p-2"
//         >
//           Delete
//         </button>
//       </tr>
//     </tbody>
//   ))}